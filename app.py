import streamlit as st
import cv2
import face_recognition as frg
import yaml
import pickle
import numpy as np
import os
from collections import defaultdict
import pandas as pd

# Load configuration
try:
    cfg = yaml.load(open('config.yaml', 'r'), Loader=yaml.FullLoader)
    DATASET_DIR = cfg['PATH']['DATASET_DIR']
    PKL_PATH = cfg['PATH']['PKL_PATH']
    PICTURE_PROMPT = cfg['INFO']['PICTURE_PROMPT']
    WEBCAM_PROMPT = cfg['INFO']['WEBCAM_PROMPT']
except:
    # Default configuration if config file is not found
    DATASET_DIR = "dataset/"
    PKL_PATH = "dataset/database.pkl"
    PICTURE_PROMPT = "Upload an image to recognize faces"
    WEBCAM_PROMPT = "Use webcam to recognize faces in real-time"
    
    # Create config file
    if not os.path.exists('config.yaml'):
        config = {
            'PATH': {
                'DATASET_DIR': DATASET_DIR,
                'PKL_PATH': PKL_PATH
            },
            'INFO': {
                'PICTURE_PROMPT': PICTURE_PROMPT,
                'WEBCAM_PROMPT': WEBCAM_PROMPT
            }
        }
        with open('config.yaml', 'w') as f:
            yaml.dump(config, f)
    
    # Create dataset directory if it doesn't exist
    if not os.path.exists(DATASET_DIR):
        os.makedirs(DATASET_DIR)

# Initialize information dictionary
information = defaultdict(dict)

# Utility Functions
def get_database():
    """Load the database from the pickle file"""
    try:
        with open(PKL_PATH, 'rb') as f:
            database = pickle.load(f)
        return database
    except:
        # Return empty database if file doesn't exist
        return {}

def recognize(image, TOLERANCE):
    """Recognize faces in an image"""
    database = get_database()
    if not database:
        return image, 'Unknown', 'Unknown'
        
    known_encoding = [database[id]['encoding'] for id in database.keys()]
    name = 'Unknown'
    id = 'Unknown'
    face_locations = frg.face_locations(image)
    face_encodings = frg.face_encodings(image, face_locations)
    
    for (top, right, bottom, left), face_encoding in zip(face_locations, face_encodings):
        matches = frg.compare_faces(known_encoding, face_encoding, tolerance=TOLERANCE)
        distance = frg.face_distance(known_encoding, face_encoding)
        name = 'Unknown'
        id = 'Unknown'
        
        if True in matches:
            match_index = matches.index(True)
            name = database[match_index]['name']
            id = database[match_index]['id']
            distance = round(distance[match_index], 2)
            cv2.putText(image, str(distance), (left, top-30), cv2.FONT_HERSHEY_SIMPLEX, 0.75, (0, 255, 0), 2)
            
        cv2.rectangle(image, (left, top), (right, bottom), (0, 255, 0), 2)
        cv2.putText(image, name, (left, top-10), cv2.FONT_HERSHEY_SIMPLEX, 0.75, (0, 255, 0), 2)
        
    return image, name, id

def isFaceExists(image):
    """Check if there are faces in the image"""
    face_location = frg.face_locations(image)
    if len(face_location) == 0:
        return False
    return True

def submitNew(name, id, image, old_idx=None):
    """Add a new student to the database or update an existing one"""
    database = get_database()
    
    # Read image
    if type(image) != np.ndarray:
        image = cv2.imdecode(np.fromstring(image.read(), np.uint8), 1)

    isFaceInPic = isFaceExists(image)
    if not isFaceInPic:
        return -1
        
    # Encode image
    encoding = frg.face_encodings(image)[0]
    
    # Check if ID already exists
    existing_id = [database[i]['id'] for i in database.keys()]
    
    # Update mode
    if old_idx is not None:
        new_idx = old_idx
    # Add mode
    else:
        if id in existing_id:
            return 0
        new_idx = len(database)
        
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    database[new_idx] = {
        'image': image,
        'id': id,
        'name': name,
        'encoding': encoding
    }
    
    with open(PKL_PATH, 'wb') as f:
        pickle.dump(database, f)
        
    return True

def get_info_from_id(id):
    """Get student information from ID"""
    database = get_database()
    for idx, person in database.items():
        if person['id'] == id:
            name = person['name']
            image = person['image']
            return name, image, idx
    return None, None, None

def deleteOne(id):
    """Delete a student from the database"""
    database = get_database()
    id = str(id)
    for key, person in database.items():
        if person['id'] == id:
            del database[key]
            break
            
    with open(PKL_PATH, 'wb') as f:
        pickle.dump(database, f)
        
    return True

def build_dataset():
    """Build the database from images in the dataset directory"""
    counter = 0
    for image in os.listdir(DATASET_DIR):
        image_path = os.path.join(DATASET_DIR, image)
        if not image_path.endswith(('.jpg', '.jpeg', '.png')):
            continue
            
        try:
            image_name = image.split('.')[0]
            parsed_name = image_name.split('_')
            person_id = parsed_name[0]
            person_name = ' '.join(parsed_name[1:])
            
            img = frg.load_image_file(image_path)
            face_encodings = frg.face_encodings(img)
            
            if len(face_encodings) > 0:
                information[counter]['image'] = img
                information[counter]['id'] = person_id
                information[counter]['name'] = person_name
                information[counter]['encoding'] = face_encodings[0]
                counter += 1
        except Exception as e:
            st.error(f"Error processing {image}: {e}")

    with open(PKL_PATH, 'wb') as f:
        pickle.dump(information, f)

# Main Application
def main():
    st.set_page_config(layout="wide", page_title="DSU Face Recognition Attendance System")
    
    # Sidebar navigation
    st.sidebar.title("DSU Attendance System")
    st.sidebar.image("https://via.placeholder.com/150x150.png?text=DSU+Logo", width=150)
    
    # Main navigation
    app_mode = st.sidebar.selectbox("Navigation", ["Home", "Live Tracking", "Database", "Manage Students", "Settings"])
    
    # Settings section (always visible)
    with st.sidebar.expander("Settings", expanded=False):
        TOLERANCE = st.slider("Recognition Tolerance", 0.0, 1.0, 0.5, 0.01)
        st.info("Tolerance is the threshold for face recognition. Lower values require a more exact match.")
    
    # Information section (always visible)
    st.sidebar.title("Student Information")
    name_container = st.sidebar.empty()
    id_container = st.sidebar.empty()
    name_container.info('Name: Unknown')
    id_container.success('ID: Unknown')
    
    # Developer section
    with st.sidebar.expander("Developer Tools", expanded=False):
        if st.button('REBUILD DATASET'):
            with st.spinner("Rebuilding dataset..."):
                build_dataset()
            st.success("Dataset has been reset")
    
    # Home page
    if app_mode == "Home":
        st.title("Dayananda Sagar University")
        st.subheader("AI-Powered Face Recognition Attendance System")
        
        col1, col2 = st.columns(2)
        
        with col1:
            st.markdown("""
            ### Welcome to DSU's Attendance System
            
            This advanced system uses facial recognition technology to automate attendance tracking for students and faculty.
            
            #### Features:
            - Real-time face detection and recognition
            - Automated attendance marking
            - Comprehensive student database management
            - Detailed attendance reports
            """)
            
            st.info("Navigate using the sidebar to access different features of the system.")
        
        with col2:
            st.image("https://via.placeholder.com/400x300.png?text=DSU+Campus", caption="Dayananda Sagar University")
    
    # Live Tracking page
    elif app_mode == "Live Tracking":
        st.title("Live Attendance Tracking")
        
        tracking_mode = st.radio("Select Input Method", ["Webcam", "Upload Image"])
        
        if tracking_mode == "Upload Image":
            st.write(PICTURE_PROMPT)
            uploaded_images = st.file_uploader("Upload", type=['jpg', 'png', 'jpeg'], accept_multiple_files=True)
            
            if len(uploaded_images) != 0:
                for image in uploaded_images:
                    image = frg.load_image_file(image)
                    image, name, id = recognize(image, TOLERANCE)
                    name_container.info(f"Name: {name}")
                    id_container.success(f"ID: {id}")
                    st.image(image)
            else:
                st.info("Please upload an image")
        
        elif tracking_mode == "Webcam":
            st.write(WEBCAM_PROMPT)
            
            start_webcam = st.button("Start Webcam")
            stop_webcam = st.button("Stop Webcam")
            
            FRAME_WINDOW = st.image([])
            
            if start_webcam:
                cam = cv2.VideoCapture(0)
                cam.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
                cam.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)
                
                while not stop_webcam:
                    ret, frame = cam.read()
                    if not ret:
                        st.error("Failed to capture frame from camera")
                        st.info("Please turn off other apps using the camera and restart")
                        break
                        
                    image, name, id = recognize(frame, TOLERANCE)
                    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
                    
                    name_container.info(f"Name: {name}")
                    id_container.success(f"ID: {id}")
                    FRAME_WINDOW.image(image)
                
                if cam.isOpened():
                    cam.release()
    
    # Database page
    elif app_mode == "Database":
        st.title("Student Database")
        
        database = get_database()
        
        if not database:
            st.warning("Database is empty. Please add students or rebuild the dataset.")
        else:
            # Convert database to DataFrame for better display
            data = []
            for idx, person in database.items():
                data.append({
                    "Index": idx,
                    "ID": person['id'],
                    "Name": person['name']
                })
            
            df = pd.DataFrame(data)
            
            # Add search functionality
            search_term = st.text_input("Search by name or ID")
            if search_term:
                filtered_df = df[df['Name'].str.contains(search_term, case=False) | 
                                df['ID'].str.contains(search_term, case=False)]
            else:
                filtered_df = df
            
            # Display table
            st.dataframe(filtered_df)
            
            # Display selected student details
            st.subheader("Student Details")
            selected_id = st.selectbox("Select a student ID to view details", 
                                      options=[person['id'] for person in database.values()])
            
            if selected_id:
                name, image, idx = get_info_from_id(selected_id)
                if name and image is not None:
                    col1, col2 = st.columns(2)
                    with col1:
                        st.image(image, caption=f"ID: {selected_id}", width=300)
                    with col2:
                        st.subheader(name)
                        st.write(f"ID: {selected_id}")
                        st.write(f"Database Index: {idx}")
    
    # Manage Students page
    elif app_mode == "Manage Students":
        st.title("Manage Students")
        
        manage_mode = st.selectbox("Select Operation", ["Add New Student", "Update Student", "Delete Student"])
        
        if manage_mode == "Add New Student":
            st.subheader("Add New Student")
            
            name = st.text_input("Name", placeholder='Enter name')
            id = st.text_input("ID", placeholder='Enter id')
            
            upload_method = st.radio("Upload image or use webcam", ("Upload", "Webcam"))
            
            if upload_method == "Upload":
                uploaded_image = st.file_uploader("Upload", type=['jpg', 'png', 'jpeg'])
                
                if uploaded_image is not None:
                    st.image(uploaded_image)
                    
                    if st.button("Submit"):
                        if name == "" or id == "":
                            st.error("Please enter name and ID")
                        else:
                            ret = submitNew(name, id, uploaded_image)
                            if ret == 1:
                                st.success("Student Added")
                            elif ret == 0:
                                st.error("Student ID already exists")
                            elif ret == -1:
                                st.error("There is no face in the picture")
            
            elif upload_method == "Webcam":
                img_file_buffer = st.camera_input("Take a picture")
                
                if img_file_buffer is not None:
                    bytes_data = img_file_buffer.getvalue()
                    cv2_img = cv2.imdecode(np.frombuffer(bytes_data, np.uint8), cv2.IMREAD_COLOR)
                    
                    if st.button("Submit"):
                        if name == "" or id == "":
                            st.error("Please enter name and ID")
                        else:
                            ret = submitNew(name, id, cv2_img)
                            if ret == 1:
                                st.success("Student Added")
                            elif ret == 0:
                                st.error("Student ID already exists")
                            elif ret == -1:
                                st.error("There is no face in the picture")
        
        elif manage_mode == "Update Student":
            st.subheader("Update Student")
            
            id = st.text_input("ID", placeholder='Enter id of student to update')
            
            if st.button("Find Student"):
                old_name, old_image, old_idx = get_info_from_id(id)
                
                if old_name is None and old_image is None:
                    st.error("Student ID does not exist")
                else:
                    st.success(f"Found student: {old_name}")
                    
                    col1, col2 = st.columns(2)
                    
                    with col1:
                        new_name = st.text_input("Name", value=old_name, placeholder='Enter new name')
                        new_id = st.text_input("New ID", value=id, placeholder='Enter new id')
                        new_image = st.file_uploader("Upload new image", type=['jpg', 'png', 'jpeg'])
                    
                    with col2:
                        st.image(old_image, caption='Current image', width=300)
                    
                    if st.button("Update"):
                        name = old_name
                        student_id = id
                        image = old_image
                        
                        if new_image is not None:
                            image = cv2.imdecode(np.frombuffer(new_image.read(), np.uint8), cv2.IMREAD_COLOR)
                        
                        if new_name != old_name:
                            name = new_name
                        
                        if new_id != id:
                            student_id = new_id
                        
                        ret = submitNew(name, student_id, image, old_idx=old_idx)
                        
                        if ret == 1:
                            st.success("Student Updated")
                        elif ret == 0:
                            st.error("Student ID already exists")
                        elif ret == -1:
                            st.error("There is no face in the picture")
        
        elif manage_mode == "Delete Student":
            st.subheader("Delete Student")
            
            id = st.text_input("ID", placeholder='Enter id of student to delete')
            
            if st.button("Find Student"):
                name, image, _ = get_info_from_id(id)
                
                if name is None and image is None:
                    st.error("Student ID does not exist")
                else:
                    st.success(f"Name of student with ID {id} is: {name}")
                    st.warning("Please check the image below to make sure you are deleting the right student")
                    st.image(image)
                    
                    if st.button("Confirm Delete"):
                        deleteOne(id)
                        st.success("Student deleted")
    
    # Settings page
    elif app_mode == "Settings":
        st.title("System Settings")
        
        st.subheader("Application Settings")
        
        col1, col2 = st.columns(2)
        
        with col1:
            st.write("Camera Settings")
            camera_index = st.number_input("Camera Index", min_value=0, max_value=10, value=0)
            camera_width = st.number_input("Camera Width", min_value=320, max_value=1920, value=640)
            camera_height = st.number_input("Camera Height", min_value=240, max_value=1080, value=480)
        
        with col2:
            st.write("Recognition Settings")
            default_tolerance = st.slider("Default Recognition Tolerance", 0.0, 1.0, 0.5, 0.01)
            auto_mark = st.checkbox("Automatically Mark Attendance", value=True)
            show_distance = st.checkbox("Show Distance Score", value=True)
        
        st.subheader("Database Settings")
        
        dataset_dir = st.text_input("Dataset Directory", value=DATASET_DIR)
        database_path = st.text_input("Database Path", value=PKL_PATH)
        
        if st.button("Save Settings"):
            # Create new config
            new_config = {
                'PATH': {
                    'DATASET_DIR': dataset_dir,
                    'PKL_PATH': database_path
                },
                'INFO': {
                    'PICTURE_PROMPT': PICTURE_PROMPT,
                    'WEBCAM_PROMPT': WEBCAM_PROMPT
                },
                'CAMERA': {
                    'INDEX': camera_index,
                    'WIDTH': camera_width,
                    'HEIGHT': camera_height
                },
                'RECOGNITION': {
                    'DEFAULT_TOLERANCE': default_tolerance,
                    'AUTO_MARK': auto_mark,
                    'SHOW_DISTANCE': show_distance
                }
            }
            
            # Save config
            with open('config.yaml', 'w') as f:
                yaml.dump(new_config, f)
            
            st.success("Settings saved successfully. Please restart the application for changes to take effect.")

if __name__ == "__main__":
    main()
