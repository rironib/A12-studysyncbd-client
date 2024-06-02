my-react-app/
│
├── public/
│ ├── index.html
│ ├── manifest.json
│ └── ...
│
├── src/
│ ├── assets/
│ │ ├── images/
│ │ └── styles/
│ │ ├── main.css
│ │ └── ...
│ │
│ ├── components/
│ │ ├── Auth/
│ │ │ ├── Login.js
│ │ │ ├── Register.js
│ │ │ └── ...
│ │ ├── Button/
│ │ │ ├── Button.js
│ │ │ ├── Button.css
│ │ │ └── Button.test.js
│ │ ├── Dashboard/
│ │ │ ├── StudentDashboard.js
│ │ │ ├── TutorDashboard.js
│ │ │ ├── AdminDashboard.js
│ │ │ └── ...
│ │ ├── Layout/
│ │ │ ├── Navbar.js
│ │ │ ├── Footer.js
│ │ │ └── ...
│ │ ├── Session/
│ │ │ ├── SessionCard.js
│ │ │ ├── SessionDetail.js
│ │ │ └── ...
│ │ ├── StudyMaterial/
│ │ │ ├── MaterialCard.js
│ │ │ ├── MaterialDetail.js
│ │ │ └── ...
│ │ ├── UI/
│ │ │ ├── Alert.js
│ │ │ ├── Button.js
│ │ │ └── ...
│ │ └── ...
│ │
│ ├── containers/
│ │ ├── Public/
│ │ │ ├── Home/
│ │ │ │ ├── Home.js
│ │ │ │ ├── Home.css
│ │ │ │ └── Home.test.js
│ │ │ └── ...
│ │ ├── Private/
│ │ │ ├── Dashboard/
│ │ │ │ ├── Dashboard.js
│ │ │ │ ├── Dashboard.css
│ │ │ │ └── Dashboard.test.js
│ │ │ └── ...
│ │ ├── Admin/
│ │ │ ├── AdminDashboard/
│ │ │ │ ├── AdminDashboard.js
│ │ │ │ ├── AdminDashboard.css
│ │ │ │ └── AdminDashboard.test.js
│ │ │ └── ...
│ │ └── ...
│ │
│ ├── context/
│ │ ├── AuthContext.js
│ │ ├── QueryClient.js
│ │ └── ...
│ │
│ ├── firebase/
│ │ ├── config.js
│ │ ├── firebase.js
│ │ └── ...
│ │
│ ├── hooks/
│ │ ├── useAuth.js
│ │ ├── useSession.js
│ │ └── ...
│ │
│ ├── layouts/
│ │ ├── PublicLayout.js
│ │ ├── PrivateLayout.js
│ │ ├── AdminLayout.js
│ │ └── ...
│ │
│ ├── pages/
│ │ ├── Home.js
│ │ ├── Login.js
│ │ ├── Register.js
│ │ ├── Dashboard.js
│ │ ├── Session.js
│ │ ├── Material.js
│ │ └── ...
│ │
│ ├── routes/
│ │ ├── PublicRoute.js
│ │ ├── PrivateRoute.js
│ │ ├── AdminRoute.js
│ │ └── ...
│ │
│ ├── services/
│ │ ├── api.js // Axios instance for API requests
│ │ ├── authService.js
│ │ ├── sessionService.js
│ │ └── ...
│ │
│ ├── utils/
│ │ ├── formatDate.js
│ │ └── helpers.js // Helper functions
│ │
│ ├── App.js
│ ├── index.js
│ └── ...
│
├── .env
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
