# AI Face Attendance System – DSU

A full-stack face recognition-based attendance platform for Dayananda Sagar University. Built using FastAPI, OpenCV, and Next.js by AIML 4th Semester students.
## Table of Contents
- Features  
- Tech Stack  
- Installation  
- Usage  
- API Reference  
- Pages  
- Branding  
- Contributing  
- License  
- Credits  
## Features
- 🎥 Real-time face recognition via webcam  
- 🎯 Subject & Slot selection before marking attendance  
- ✅ Prevents duplicate entries in the same session  
- 🧑‍🎓 Upload student data via webcam or files  
- 📋 View, filter & download attendance logs  
- 🌐 Redirects to DSU ERP login  
- 📱 Fully responsive UI  
- 🌈 DSU-themed interface with glassmorphism  
## Tech Stack

**Backend:**  
- Python  
- FastAPI  
- OpenCV  
- face_recognition (dlib)  
- SQLite  

**Frontend:**  
- Next.js (React)  
- TailwindCSS  
- Framer Motion  
- Shadcn/UI  
- Axios  
- Lucide Icons  
## Installation

## Backend

```bash
cd backend  
pip install -r requirements.txt  
uvicorn main:app --reload
```
## Frontend

cd frontend  
npm install  

# Create .env.local with:  
NEXT_PUBLIC_API_URL=http://localhost:8000  

npm run dev

---

### 🟩 **6. Usage**

```md
1. Start backend server  
2. Run frontend  
3. Access app at `http://localhost:3000`  
4. Use webcam to recognize faces  
5. Upload student data and view logs  

```
## API Reference

| Endpoint           | Method | Description                         |
|--------------------|--------|-------------------------------------|
| `/recognize`       | POST   | Recognize face from webcam frame    |
| `/students`        | GET    | Retrieve all students               |
| `/students`        | POST   | Add a student                       |
| `/students/{id}`   | PUT    | Update student                      |
| `/students/{id}`   | DELETE | Delete student                      |
| `/attendance`      | GET    | Get all attendance logs             |
| `/update-dataset`  | POST   | Upload new images for encoding      |

## Pages

- **Live Recognition:** Webcam preview with subject/slot  
- **Student Database:** Add/Edit/Delete with webcam/file upload  
- **Attendance Logs:** Filter by subject/date, export as CSV  
- **Update Dataset:** Upload new images to refresh face encodings  
- **Docs & ERP:** Project info and DSU UMS redirection  
## Branding

- 🎓 DSU Logo and Banner  
- 🔵 Color theme: `#004080`, `#0073e6`, white  
- 🌐 DSU ERP: [https://ums.mydsi.org](https://ums.mydsi.org)  
- 🧾 Footer: “Built by AIML 4th Semester Students – DSU”  
## Contributing

    1. Fork repo  
    2. Create feature branch  
    3. Commit changes  
    4. Push to branch  
    5. Open Pull Request  
## License

This project is intended only for academic use.  
Not licensed for commercial distribution.

## Credits

Developed by:  
**AIML - 4th Semester Students**  
**Dayananda Sagar University**  

GitHub: [https://github.com/amitabh-7t/face-attendance](https://github.com/amitabh-7t/face-attendance)
