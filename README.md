# Collaborative Study Platform - [StudySync]

Welcome to the client side repository of the Collaborative Study Platform, a web application designed to connect students, tutors, and administrators for seamless study session scheduling, resource sharing, and user management.

## Live Site URL

- [StudySync](https://studysyncbd.web.app/)

## Admin Credentials

- **Admin Username:** admin@example.com
- **Admin Password:** admin123

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **User Registration and Login:**
    - Register as a student, tutor, or admin with a simple sign-up form.
    - Secure JWT-based authentication for all users.
    - Social login options available via Google and GitHub.

2. **Responsive Design:**
    - Fully responsive across all devices including mobile, tablet, and desktop.
    - User-friendly and accessible interface for seamless navigation.

3. **Study Sessions:**
    - View and book study sessions directly from the homepage.
    - Detailed session information including tutor name, duration, and registration fee.
    - Real-time status updates (ongoing/closed) for each session.

4. **Student Dashboard:**
    - View and manage booked sessions.
    - Create and manage personal notes.
    - Access study materials provided by tutors.

5. **Tutor Dashboard:**
    - Create and manage study sessions.
    - Upload and manage study materials.
    - View notes and feedback from students.

6. **Admin Dashboard:**
    - Manage all users and their roles.
    - Approve or reject study sessions submitted by tutors.
    - Monitor and manage all uploaded study materials.

7. **Role-Based Access Control:**
    - Middleware to ensure only authorized users can access specific routes.
    - Enhanced security and user management.

8. **CRUD Operations with Notifications:**
    - Use of sweet alert/toast notifications for all CRUD operations.
    - Enhanced user experience with custom notifications instead of default browser alerts.

9. **Environment Variables:**
    - Secure management of Firebase config keys and MongoDB credentials using environment variables.

10. **Optimized Data Fetching:**
    - Implemented tanstack query for efficient data fetching.
    - Optimized for GET methods to ensure fast and reliable data retrieval.

## Installation

To get a local copy up and running, follow these simple steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/programming-hero-web-course1/b9a12-client-side-rironib.git
2. **Install NPM packages:**
   ```sh
   npm install

## Usage
1. **Run the development server:**
   ```sh
   npm run dev
2. **Open your browser:**

   Navigate to http://localhost:5173 to see the application in action.

## Environment Variables
   To run this project, you will need to add the following environment variables to your .env file:

      VITE_API_KEY=firebase_api_key
      VITE_AUTH_DOMAIN=firebase_auth_domain
      VITE_PROJECT_ID=firebase_project_id
      VITE_STORAGE_BUCKET=firebase_storage_bucket
      VITE_MESSAGING_SENDER_ID=firebase_messaging_sender_id
      VITE_APP_ID=firebase_app_id
      VITE_IMAGE_HOSTING_KEY=imgbb_image_hosting_key
      VITE_STRIPE_PK=stripe_public_key

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Firebase:** A platform developed by Google for creating mobile and web applications, used for authentication and real-time database.
- **Tanstack Query:** For efficient data fetching and state management.
- **SweetAlert2:** For beautiful, responsive alerts and notifications.
- **Chakra UI:** A simple, modular, and accessible component library for React.
- **Stripe:** For handling payments securely.
- **Axios:** A promise-based HTTP client for making requests to the backend.
- **Framer Motion:** A library for creating animations in React.
- **React Hook Form:** For managing form state and validation.
- **React Router DOM:** For handling routing in the application.
- **TailwindCSS:** A utility-first CSS framework for quickly styling the application.
- **Vite:** A build tool that aims to provide a faster and leaner development experience for modern web projects.


## Contributing
Contributions are what make the open-source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project.
2. Create your Feature Branch (git checkout -b feature/AmazingFeature).
3. Commit your Changes (git commit -m 'Add some AmazingFeature').
4. Push to the Branch (git push origin feature/AmazingFeature).
5. Open a Pull Request.

## License

Distributed under the MIT License. See LICENSE for more information.