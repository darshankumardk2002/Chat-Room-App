import React, { useState, useRef } from 'react';
import './App.css';
import { Auth } from './components/Auth';

// component imports
import { Chat } from './components/Chat';

// cookie imports
import Cookies from "universal-cookie";
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

function App() {
  const cookies = new Cookies();
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState(null);
  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  }

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth}/>
      </div>
    );
  }

  return (
    <>
      {room ? (
        <Chat room={room}/>
      ) : (
          <div className="room">
            <label>Enter Room Name:</label>
            <input ref={roomInputRef}/>
            <button onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
          </div>
        )}
      <div className="sign-out">
        <button onClick={signUserOut}>Sign Out</button>
      </div>
    </>
  )
}

export default App;
