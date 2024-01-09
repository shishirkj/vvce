import React from 'react'
import TextEditor from './components/TextEditor'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Signup from './components/authentication/Signup';
import Dashboard from './components/dashboard/Dashboard';

export default function App() {
  return (
    <div>
       <Router>
        <Routes>
        <Route path="/" element={<TextEditor/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        </Routes>
       </Router>

    
    </div>
  )
}
