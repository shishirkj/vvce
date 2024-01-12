import React from 'react'
import TextEditor from './components/TextEditor'
import { BrowserRouter as Router, Route, Routes,Navigate} from "react-router-dom";
import Signup from './components/authentication/Signup';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/UserProfie/Profile';
import Price from './components/pricing/price';
import {v4 as uuidV4} from 'uuid'
export default function App() {
  return (
    <div>
       <Router>
        <Routes>
        <Route path="/" element={<Navigate to={`documents/${uuidV4()}`}/>}></Route>
        
        <Route path='documents/:id' element={ <TextEditor/>}/>
         
        
       
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/price" element={<Price />} />
        
        </Routes>
       </Router>
    
    </div>
  )
}
