🚀 Full-Stack User Dashboard (Next.js + Firebase + Docker)

This project is a full-stack CRUD dashboard built with Next.js (frontend), Firebase Cloud Functions + Firestore (backend/database), and containerized using Docker.

📁 Project Structure

fsd-dashboard/
├── backend/                 # Firebase Cloud Functions
│   └── functions/src/index.ts
│
├── frontend/                # Next.js frontend app
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   └── src/app/page.tsx
│
├── README.md                # Project setup & usage
└── docs/api-doc.md          # API endpoint documentation


⸻

📦 Features
	•	✅ Add User
	•	✅ View Users
	•	✅ Delete User
	•	✅ Backend with Firebase Functions
	•	✅ Cloud Firestore as database
	•	✅ Frontend fully containerized using Docker

⸻

🔧 How to Run Frontend using Docker

Step 1: Navigate to frontend folder

cd frontend

Step 2: Build Docker image

docker build -t fsd-dashboard-frontend .

Step 3: Run Docker container

docker run -p 3000:3000 fsd-dashboard-frontend

Step 4: Open in Browser

http://localhost:3000


⸻

🧪 Firebase Backend (Already Deployed)
	•	GET /getUsers: Get all users
	•	POST /addUser: Add a new user
	•	DELETE /deleteUser: Delete a user by ID

📍 See docs/api-doc.md for full API details

⸻

⚙️ Tech Stack
	•	Frontend: Next.js 15, TypeScript, Tailwind CSS
	•	Backend: Firebase Cloud Functions
	•	Database: Firebase Firestore
	•	Containerization: Docker (Node Alpine)

⸻

🔁 CRUD Operations Demo
	1.	Add user with name + email
	2.	View all users
	3.	Delete any user

✅ All updates reflected live via Firestore

⸻

📄 License

This project is for educational/demo purposes only.

⸻

📹 Video Demo (Optional)
	•	Demonstrates:
	•	Adding a user
	•	Fetching user list
	•	Deleting a user
	•	Running app in Docker

⸻

🙌 Author

Aniket Pawar
