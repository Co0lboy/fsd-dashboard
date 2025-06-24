🚀 Full-Stack User Dashboard (Next.js + Firebase + Docker)

This repository contains a containerized full-stack user dashboard application built with Next.js for the frontend and Firebase Functions + Firestore for the backend. The application supports full CRUD operations and is designed to be portable via Docker.

⸻

📁 Project Structure

fsd-dashboard/
├── backend/                     # Firebase Cloud Functions backend
│   └── functions/src/index.ts
│
├── frontend/                    # Next.js frontend app
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   └── src/app/page.tsx
│
├── README.md                    # This file
└── docs/api-doc.md              # API Documentation


⸻

🌟 Features
	•	Add new users
	•	View all users
	•	Delete existing users
	•	Firebase Firestore integration
	•	Backend hosted on Firebase Cloud Functions
	•	Frontend containerized with Docker

⸻

🐳 Run Frontend Using Docker

1. Navigate to the frontend directory:

cd frontend

2. Build Docker image:

docker build -t fsd-dashboard-frontend .

3. Run the container:

docker run -p 3000:3000 fsd-dashboard-frontend

4. Access in browser:

http://localhost:3000


⸻

🔧 Firebase Backend (Already Deployed)

The backend consists of three Cloud Functions:

Function	Method	Endpoint URL
getUsers	GET	https://us-central1-YOUR_PROJECT.cloudfunctions.net/getUsers
addUser	POST	https://us-central1-YOUR_PROJECT.cloudfunctions.net/addUser
deleteUser	DELETE	https://us-central1-YOUR_PROJECT.cloudfunctions.net/deleteUser

📄 See docs/api-doc.md for full API usage with request/response formats.

⸻

🔁 CRUD Operations Demo
	•	Add User: Fill name and email and submit the form.
	•	View Users: Automatically listed on load.
	•	Delete User: Click delete button next to a user.

All changes are synced to Firebase Firestore in real-time.

⸻

📦 Tech Stack
	•	Frontend: Next.js 15, TypeScript, Tailwind CSS
	•	Backend: Firebase Cloud Functions (Node.js)
	•	Database: Firebase Firestore
	•	DevOps: Docker

⸻

📝 How to Clone and Run Locally

git clone https://github.com/yourusername/fsd-dashboard.git
cd fsd-dashboard/frontend
npm install
npm run dev

Ensure your backend Firebase Functions are already deployed.

⸻

🎥 Video Demo Checklist (To Record)
	1.	Run docker build and docker run commands
	2.	Open browser on localhost:3000
	3.	Demonstrate Add, View, Delete users
	4.	Optionally show Firestore dashboard

⸻

📄 License

This project is provided for educational and demonstration purposes.

⸻

🙌 Author

Aniket Pawar
GitHub Profile
