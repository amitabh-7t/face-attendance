# DSU Face Recognition Attendance System

An AI-powered attendance tracking system for Dayananda Sagar University that uses facial recognition to automate the attendance process.

## Features

- Real-time face detection and recognition
- Automated attendance marking
- Comprehensive student database management
- Detailed attendance reports and analytics
- User-friendly interface for administrators and faculty

## Installation

1. Clone the repository
\`\`\`bash
git clone https://github.com/dsu/face-recognition-attendance.git
cd face-recognition-attendance
\`\`\`

2. Install the dependencies
\`\`\`bash
pip install -r requirements.txt
\`\`\`

3. Run the application
\`\`\`bash
streamlit run app.py
\`\`\`

## System Requirements

- Python 3.9 or higher
- Webcam or camera device
- 8GB RAM (16GB recommended)
- Intel Core i5 or equivalent (i7 recommended)

## Usage

1. Navigate to the different sections using the sidebar:
   - Home: Overview of the system
   - Live Tracking: Track attendance in real-time
   - Database: View student records
   - Manage Students: Add, update, or delete student records
   - Settings: Configure system parameters

2. For adding new students:
   - Go to "Manage Students" and select "Add New Student"
   - Enter the student's name and ID
   - Upload an image or take a picture using the webcam
   - Submit the form to add the student to the database

3. For tracking attendance:
   - Go to "Live Tracking"
   - Choose between webcam or image upload
   - The system will automatically recognize faces and display the results

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Developed for Dayananda Sagar University
- Powered by face_recognition library and OpenCV
\`\`\`

```python file="setup.py"
import os
import yaml
import pickle
from collections import defaultdict

# Create default directories and files
def setup():
    # Create dataset directory if it doesn't exist
    if not os.path.exists('dataset'):
        os.makedirs('dataset')
        print("Created dataset directory")
    
    # Create empty database file if it doesn't exist
    if not os.path.exists('dataset/database.pkl'):
        with open('dataset/database.pkl', 'wb') as f:
            pickle.dump({}, f)
        print("Created empty database file")
    
    # Create config file if it doesn't exist
    if not os.path.exists('config.yaml'):
        config = {
            'PATH': {
                'DATASET_DIR': 'dataset/',
                'PKL_PATH': 'dataset/database.pkl'
            },
            'INFO': {
                'PICTURE_PROMPT': 'Upload an image to recognize faces',
                'WEBCAM_PROMPT': 'Use webcam to recognize faces in real-time'
            },
            'CAMERA': {
                'INDEX': 0,
                'WIDTH': 640,
                'HEIGHT': 480
            },
            'RECOGNITION': {
                'DEFAULT_TOLERANCE': 0.5,
                'AUTO_MARK': True,
                'SHOW_DISTANCE': True
            }
        }
        
        with open('config.yaml', 'w') as f:
            yaml.dump(config, f)
        print("Created config file")
    
    print("Setup complete. Run 'streamlit run app.py' to start the application.")

if __name__ == "__main__":
    setup()
