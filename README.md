# 🎥 mern-tube: A MERN Stack Video Platform

![MERN Stack](https://img.shields.io/badge/MERN-Stack-brightgreen?style=flat&logo=react) ![Node.js](https://img.shields.io/badge/Node.js-333333?style=flat&logo=node.js) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express) ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat&logo=tailwind-css)

## 🚀 Introduction

Welcome to **mern-tube**, a video streaming platform built using the MERN stack. This project is currently in the development stage. It aims to provide a seamless experience for users to upload, view, and share videos. 

Check out the latest updates and releases [here](https://github.com/arthi1924/mern-tube/releases).

## 📚 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## ✨ Features

- **User Authentication**: Secure user sign-up and login using bcryptjs.
- **Video Uploads**: Users can upload videos easily.
- **Video Playback**: Stream videos in high quality.
- **Responsive Design**: Tailwind CSS ensures a mobile-friendly interface.
- **RESTful API**: Built with Express.js to handle requests.
- **Database Integration**: Uses MongoDB Atlas for data storage.

## 🛠️ Technologies Used

This project utilizes a variety of technologies to deliver a robust application:

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: bcryptjs
- **HTTP Client**: axios

## 🏗️ Getting Started

To set up this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/arthi1924/mern-tube.git
   cd mern-tube
   ```

2. **Install Dependencies**:
   - Navigate to both the frontend and backend directories to install the required packages.

   For the backend:
   ```bash
   cd backend
   npm install
   ```

   For the frontend:
   ```bash
   cd ../frontend
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the backend directory and add your MongoDB Atlas connection string and other necessary configurations.

4. **Run the Application**:
   Start the backend server:
   ```bash
   cd backend
   npm start
   ```

   Start the frontend server:
   ```bash
   cd ../frontend
   npm start
   ```

5. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000` to view the application.

## 📁 Project Structure

The project is organized into two main directories: `frontend` and `backend`.

### Backend Structure
```
backend/
│
├── config/          # Configuration files
├── controllers/     # API controllers
├── models/          # Database models
├── routes/          # API routes
├── middleware/      # Authentication middleware
└── server.js       # Main server file
```

### Frontend Structure
```
frontend/
│
├── public/          # Static files
├── src/             # React components
│   ├── components/  # Reusable components
│   ├── pages/       # Page components
│   └── App.js       # Main application file
└── index.js         # Entry point
```

## 📡 API Endpoints

The following are the key API endpoints available in the application:

### User Authentication
- **POST** `/api/auth/signup`: Register a new user.
- **POST** `/api/auth/login`: Log in an existing user.

### Video Management
- **POST** `/api/videos/upload`: Upload a new video.
- **GET** `/api/videos`: Retrieve all videos.
- **GET** `/api/videos/:id`: Retrieve a specific video by ID.

### Comments
- **POST** `/api/videos/:id/comments`: Add a comment to a video.
- **GET** `/api/videos/:id/comments`: Retrieve comments for a video.

## 🤝 Contributing

We welcome contributions to improve the project. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your forked repository.
5. Create a pull request describing your changes.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📞 Contact

For any inquiries or suggestions, feel free to reach out:

- **Author**: Arthi
- **GitHub**: [arthi1924](https://github.com/arthi1924)

To stay updated with the latest changes, visit the releases section [here](https://github.com/arthi1924/mern-tube/releases).

---

This README provides a comprehensive overview of the mern-tube project. For more details, you can explore the codebase or check the issues section for ongoing discussions and improvements. Your feedback and contributions are highly valued as we work towards enhancing this video platform.