import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import AlumniLoginLegacy from './components/login/AlumniLoginLegacy';
import Notification from './components/notification/notification';
import TripleLogin from './components/login/TripleLogin';
import Approval_page from './components/admin/approval_page';
import Feedback from './components/forms/feedbackForm'
import MessageBoard from './components/message/messageBoard'
import Home from './components/home/home';
import SignUpPage from './components/login/SignUpPage';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/approval" element={<Approval_page/>}/> 
          <Route path="/feedback" element={<Feedback />} /> 
          <Route path="/notification" element={<Notification />} />  
          <Route path="/messages" element={<MessageBoard />} />
          <Route path="/" element={<Home />} />  
          <Route path="/login" element = {<TripleLogin />} />
          <Route path="/signup" element={<SignUpPage />} />
            
        </Routes>
      </div>
    </Router>

  );
}

export default App;
