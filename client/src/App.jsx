import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
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
import AskAI from './pages/AskAI';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      {/* ✅ Navbar should be outside Routes to be global */}
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={
          <PrivateRoute><Dashboard /></PrivateRoute>
        } />
        <Route path="/projects" element={
          <PrivateRoute><ProjectFeed /></PrivateRoute>
        } />
        <Route path="/jobs" element={
          <PrivateRoute><JobFeed /></PrivateRoute>
        } />
        <Route path="/jobs/startups" element={
          <PrivateRoute><StartupJobs /></PrivateRoute>
        } />
        <Route path="/challenges" element={
          <PrivateRoute><Challenges /></PrivateRoute>
        } />
        <Route path="/challenges/:id" element={
          <PrivateRoute><ChallengeDetail /></PrivateRoute>
        } />
        <Route path="/admin/challenges" element={
          <PrivateRoute><PostChallenge /></PrivateRoute>
        } />
        <Route path="/admin/jobs" element={
          <PrivateRoute><PostJob /></PrivateRoute>
        } />
        <Route path="/ask" element={
          <PrivateRoute><AskAI /></PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
