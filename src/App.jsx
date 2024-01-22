import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import AlumniLoginLegacy from './components/login/AlumniLoginLegacy';
import Notification from './components/notification/notification';
import LoginPage from './components/login/LoginPage';

function App() {
  return (
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route path="/dashboard" element={<Dashboard />} />
    //       <Route path="/" element={<AlumniLoginLegacy />} />
    //       <Route path="/notification" element={<Notification />} />  
    //     </Routes>
    //   </div>
    // </Router>
    <div className='w-screen h-screen'> 
      <LoginPage />
      
    </div>
  );
}

export default App;
