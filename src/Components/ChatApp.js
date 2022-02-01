import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from 'src/Components/Contexts/AuthContext'
import Chats from "src/Components/Chats"
import Login from "src/Components/Login"
const ChatApp=()=>{
    return (
        <div style={{ fontFamily: 'Avenir' }}>
          <Router>
             <AuthProvider> 
              <Routes>
                <Route path="/chats" element={<Chats/>} />
                <Route path="/" element={<Login/>} /> 
              </Routes>
             </AuthProvider> 
          </Router>
        </div>
      )
}
export default ChatApp;