import React, { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "src/Components/Contexts/firebase"
const AuthContext = React.createContext()
export function useAuth() { return useContext(AuthContext) }
export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    auth.onAuthStateChanged((userDetail) => {
      setUser(userDetail)
      setLoading(false)
      if(user) navigate('/chats')
    })
  }, [user, navigate])

  const value = { user }

  return (
    <AuthContext.Provider 
      value={
        value
    }
    >
      {!loading && children}
    </AuthContext.Provider>
  )
}
