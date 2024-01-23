import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/AlumniLogin';
import Notification from './components/notification/notification';
import MessageBoard from './components/message/messageBoard'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
          <Route path="/notification" element={<Notification />} />  
          <Route path="/message" element={<MessageBoard />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
