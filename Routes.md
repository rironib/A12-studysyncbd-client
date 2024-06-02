import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import PrivateLayout from './layouts/PrivateLayout';
import AdminLayout from './layouts/AdminLayout';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import AdminRoute from './routes/AdminRoute';

// Public Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SessionList from './pages/SessionList';
import SessionDetail from './pages/SessionDetail';

// Private Pages
import Dashboard from './pages/Dashboard';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import TutorDashboard from './components/Dashboard/TutorDashboard';

// Admin Pages
import AdminDashboard from './components/Dashboard/AdminDashboard';
import UserManagement from './components/Admin/UserManagement';
import SessionManagement from './components/Admin/SessionManagement';

function App() {
return (
<Router>
<Routes>
{/_ Public Routes _/}
<Route element={<PublicLayout />}>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/sessions" element={<SessionList />} />
<Route path="/sessions/:id" element={<SessionDetail />} />
</Route>

        {/* Private Routes */}
        <Route element={<PrivateLayout />}>
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/tutor/dashboard" element={<TutorDashboard />} />
          </Route>
        </Route>

        {/* Admin Routes */}
        <Route element={<AdminLayout />}>
          <Route element={<AdminRoute />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/sessions" element={<SessionManagement />} />
          </Route>
        </Route>
      </Routes>
    </Router>

);
}

export default App;
