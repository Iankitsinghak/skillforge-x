import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './routes/PrivateRoute';
import ProjectFeed from './pages/ProjectFeed';
import JobFeed from './pages/JobFeed';
import StartupJobs from './pages/StartupJobs';
import Challenges from './pages/Challenges';
import ChallengeDetail from './pages/ChallengeDetail';
import PostChallenge from './pages/PostChallenge';
import PostJob from './pages/PostJob';

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
      <Route
  path="/challenges"
  element={
    <PrivateRoute>
      <Challenges />
    </PrivateRoute>
  }
/>
<Route
  path="/challenges/:id"
  element={
    <PrivateRoute>
      <ChallengeDetail />
    </PrivateRoute>
  }
/>
        <Route
  path="/admin/challenges"
  element={
    <PrivateRoute>
      <PostChallenge />
    </PrivateRoute>
  }
/>
        <Route
  path="/admin/jobs"
  element={
    <PrivateRoute>
      <PostJob />
    </PrivateRoute>
  }
/>
      </Routes>
    </Router>
  );
}

export default App;
