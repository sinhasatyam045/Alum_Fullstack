import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/AlumniLogin';
import Notification from './components/notification/notification';
import Approval_page from './components/admin/approval_page';
import Feedback from './components/forms/feedbackForm'
import MessageBoard from './components/message/messageBoard'



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
          <Route path="/approval" element={<Approval_page/>}/> 
          <Route path="/" element={<Login />} />      
          <Route path="/feedback" element={<Feedback />} /> 
          <Route path="/notification" element={<Notification />} />  
          <Route path="/message" element={<MessageBoard />} />
          <Route path="/home" element={<Home />} />  


        </Routes>
      </div>
    </Router>
  );
}

export default App;
