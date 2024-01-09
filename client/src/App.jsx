import React from 'react'
import TextEditor from './components/TextEditor'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Signup from './components/authentication/Signup';

export default function App() {
  return (
    <div>
       <Router>
        <Routes>
        <Route path="/" element={<TextEditor/>} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
       </Router>

    
    </div>
  )
}
