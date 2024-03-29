import React, { useRef, useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { ChatEngine } from 'react-chat-engine'
import { useAuth } from "src/Components/Contexts/AuthContext"
import { auth } from "src/Components/Contexts/firebase"

export default function Chats() {
  const didMountRef = useRef(false)
  const [ loading, setLoading ] = useState(true)
  const { user } = useAuth()
  const navigate = useNavigate()
  async function handleMyChatApp(e){
    await navigate("/chats")
  }
  async function handleLogout(e) {
    await auth.signOut()
    navigate("/")
  }
  async function getFile(url) {
    let response = await fetch(url);
    let data = await response.blob();
    return new File([data], "test.jpg", { type: 'image/jpeg' });
  }
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true
      if (!user || user === null) {
        navigate("/")
        return
      }
      axios.get(
        'https://api.chatengine.io/users/me/',
        { headers: { 
          "project-id": process.env.REACT_APP_CHAT_ENGINE_ID,
          "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY,
          "user-name": user.email,
          "user-secret": user.uid
        }}
      )
      .then(() => setLoading(false))
      .catch(e => {
        let formdata = new FormData()
        formdata.append('email', user.email)
        formdata.append('username', user.email)
        formdata.append('secret', user.uid)
        getFile(user.photoURL)
        .then(avatar => {
            formdata.append('avatar', avatar, avatar.name)
            axios.post(
              'https://api.chatengine.io/users/',
              formdata,
              { headers: { "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY }}
            )
            .then(() => setLoading(false))
            .catch(err => console.log('e', err.response))
        })
      })
    }
  }, [user, navigate])
  
  if (!user || loading) return <div />

  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div onClick={handleMyChatApp} className='logo-tab'>
          MyChatApp
        </div>
        <div onClick={handleLogout} className='logout-tab'>
          Logout
        </div>
      </div>
      <ChatEngine 
          height='calc(100vh - 66px)'
          projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
          userName={user.email}
          userSecret={user.uid}
          onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  )
}
