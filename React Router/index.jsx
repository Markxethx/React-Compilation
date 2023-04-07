import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/App.scss'  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Services from "./pages/Services"
import Signup from "./pages/Signup"
import PlatformRegistration from "./pages/PlatformRegistration"
import AuditRegistration from  "./pages/AuditRegistration"
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
function App() { 
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home/>} />  
          <Route path="services" element={<Services /> } />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="platform-registration" element={<PlatformRegistration />} />
          <Route path="audit-register" element={<AuditRegistration />} />
          <Route path="about" element={<About />} />
          {/* 
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> 
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App


