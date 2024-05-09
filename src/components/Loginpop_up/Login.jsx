import React, { useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Login = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Login");
    const [name, setname] = useState("Login")
  return (
   <>
    <div className="login-popup">
        <form action="" className="login-form">
            <div className="login-head">
                <h2>{currState}</h2>
                <img onClick={()=>{
                    setShowLogin(false);
                }} src={assets.cross_icon} className="login-cross-icon" alt="" />
            </div>
            <div className="login-details">
                {currState==="Login"?<></>:<input type="text" placeholder='Enter Name' required />}
                <input type="email" placeholder='Enter Email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button className='btn-class' onClick={()=>{
                setname(document.querySelector('.name').value);
                document.querySelector('.hero-section').cssText += 'padding-top:5rem';
            }}>{currState === "Sign Up"?"Create account":"Login"}</button>
            <div className="login-footer">
                
                <p><input type="checkbox" required/> By continuing, I agree the terms of use & privacy policy.</p>
                {currState === "Login"?
                    <p>Don't have an account? <span className='login-span' onClick={()=>{
                        setCurrState("Sign Up");
                    }}>Sign Up</span></p>
                    :<p>Already have an account? <span className='login-span' onClick={
                        ()=>{
                            setCurrState("Login");
                        }
                    }>Login Here</span></p>
                }

            </div>
        </form>
    </div>
   </>
  );
};

export default Login;
