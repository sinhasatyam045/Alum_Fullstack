import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/AlumniLogin';
import Notification from './components/notification/notification';
import Feedback from './components/forms/feedbackForm'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
          <Route path="/notification" element={<Notification />} /> 
          <Route path="/feedback" element={<Feedback />} /> 
           
        </Routes>
      </div>
    </Router>
  );
}

export default App;
