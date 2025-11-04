import "./App.css";
import { Signup } from "./Signup/Signup";
import { Weather } from "./Weather/Weather";
import { BrowserRouter, Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import styles from "./Weather/Weather.module.css";
import { NotFound } from "./NotFound/NotFound";
import { useEffect, useState } from "react";
function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [exist,setExist]=useState(false);
  let user=localStorage.getItem("user");
  useEffect(()=>{
    if(user){
      setExist(true)
    }else{
      setExist(false);
    }
  },[navigate,exist,user])
  const isSignupPage = location.pathname === "/signup";

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>☀️ SkyNow</h1>
      <h2 style={{color:"#006bff"}}>{exist?(`Hi , ${user}`):null}</h2>
      {/* Conditional Button */}
      {!isSignupPage ? (
        !exist?(
        <button
          className={styles.signup_btn}
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>):(
        <button
          className={styles.signup_btn}
          onClick={() => 
            {
              localStorage.removeItem("user")
              setExist(false);
            }}
        >
          Logout
        </button>
      )
      ) : (
        <button
          className={styles.signup_btn}
          onClick={() => navigate("/home")}
        >
          Home
        </button>
      )}
    </nav>
  );
}

function AppContent() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
        <Route path="/" element={<Navigate to="/weather" replace />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}




