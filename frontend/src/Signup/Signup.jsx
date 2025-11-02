import { useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from "./Signup.module.css";
export const Signup=()=>{
    const [info,setInfo]=useState({username:"",email:"",password:""});
    const [error,setError]=useState(null);
    const navigate=useNavigate();
    const submitForm=async()=>{
        const request=await fetch("http://localhost:8080/signup",{
            method:"POST",
            body:JSON.stringify({info}),
            headers:{
                "Content-Type":"application/json"
            },
        });
        const response=await request.json();
        if(request.status===200 && response.response==="ok"){
            setTimeout(()=>{
                localStorage.setItem("user",info.username);
                navigate("/home");
            },1000)
        }else{
            setError(response.response);
        }
    }
    const fieldCheck=(e)=>{
        e.preventDefault();
        if(info.username !=="" && info.email !=="" && info.password !==""){
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if(emailRegex.test(info.email)){
                const passwordRegex = /^.{8,}$/;
                if(passwordRegex.test(info.password)){
                    submitForm();
                    setError(null);
                }else{
                    setError("please enter a strong password");
                }
            }else{
                setError("please enter a valid email address");
            }
        }else{
            setError("please fill all the fields")
            setTimeout(()=>{
                setError(null);
            },2000);
        }
    }
    return(
        <div className={styles.main}>
            <div className={styles.inputContainer}>
                <form onSubmit={fieldCheck}>
                    <input name="username" value={info.username} onChange={(e)=>{
                        setInfo({...info,username:e.target.value})
                    }} type="text" placeholder="Username" />
                    <input name="email" value={info.email} onChange={(e)=>{
                        setInfo({...info,email:e.target.value})
                    }} type="text" placeholder="Email" />
                    <input name="password" value={info.password} onChange={(e)=>{
                        setInfo({...info,password:e.target.value})
                    }} type="password" placeholder="Password" />
                        <p style={{color:"red"}}>{error?error:null}</p>
                    <button >Sign Up</button>
                </form>

            </div>
        </div>
    )
}