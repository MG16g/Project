import React, { useState } from 'react'
import './LoginSignUp.css'

 const LoginSignUp = () => {
    const [action,setAction]=useState("Login");
    

  return (
    <div className='containers'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>: <div className="input">
                <img src="" alt="" />
                <input type="text" placeholder='Name' />
            </div>}
            <div className="input">
                <img src="" alt="" />
                <input type="email" placeholder='Email'/>
            </div>
            <div className="input">
                <img src="" alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-Password">Forgot Password?<span>Click Here!</span></div>}
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}
export default LoginSignUp
