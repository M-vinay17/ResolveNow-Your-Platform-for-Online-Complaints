import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/common/Home';
import About from './components/common/About';
import Login from './components/common/Login';
import SignUp from './components/common/SignUp';
import Complaint from './components/user/Complaint';
import Status from './components/user/Status';
import HomePage from './components/user/HomePage';
import AdminHome from './components/admin/AdminHome';
import AgentInfo from './components/admin/AgentInfo';
import AdminDashboard from './components/admin/AdminDashboard';
import UserInfo from './components/admin/UserInfo';
import AccordionAdmin from './components/admin/AccordionAdmin';
import AgentHome from './components/agent/AgentHome';
import ChatWindow from './components/common/ChatWindow';
import FooterC from './components/common/FooterC';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* User routes */}
        <Route path="/user/home" element={<HomePage />} />
        <Route path="/user/complaint" element={<Complaint />} />
        <Route path="/user/status" element={<Status />} />

        {/* Admin routes */}
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin/agents" element={<AgentInfo />} />
        <Route path="/admin/users" element={<UserInfo />} />
        <Route path="/admin/accordion" element={<AccordionAdmin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Agent routes */}
        <Route path="/agent/home" element={<AgentHome />} />

        {/* Common */}
        <Route path="/chat" element={<ChatWindow />} />
      </Routes>
      <FooterC />
    </div>
  );
}

export default App;