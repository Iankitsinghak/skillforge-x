import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './routes/PrivateRoute';
import ProjectFeed from './pages/ProjectFeed';
import JobFeed from './pages/JobFeed';
import StartupJobs from './pages/StartupJobs';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
  path="/projects"
  element={
    <PrivateRoute>
      <ProjectFeed />
    </PrivateRoute>
  }
/>
        <Route
  path="/jobs"
  element={
    <PrivateRoute>
      <JobFeed />
    </PrivateRoute>
  }
/>
<Route
  path="/jobs/startups"
  element={
    <PrivateRoute>
      <StartupJobs />
    </PrivateRoute>
  }
/>
        
      </Routes>
    </Router>
  );
}

export default App;
