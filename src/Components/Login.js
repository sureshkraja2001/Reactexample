
import  "./Login.css";
// function Login(){
import React, { useState } from 'react';
import { emailValidator, passwordValidator } from "../Components/regexValidator"

const Login = () =>{
    const [input,setInput]= useState({email:'',password:''})

    const [errorMessage,seterrorMessage] =useState('')
    const [errorMessage1,seterrorMessag] =useState('')


    const handleChange = (e) =>{
        setInput({...input,[e.target.name]: e.target.value})
    
    }
    const fromsubmitter = (e) =>{
        e.preventDefault()
        if(!emailValidator(input.email))
         return seterrorMessage('please enter vaild email id');

         if(!passwordValidator(input.password))
     
         return seterrorMessage('Password should have minimum 8 character with the combinatio of uppercase,lowercase,numbers and specialcharacters');

         window.location.assign('/dashboard')
    }


    return(
        <>
            

        <div className="login1">

        <form class="form" onSubmit={fromsubmitter}>
    <p className="heading">Login</p>

    <img src="https://c4.wallpaperflare.com/wallpaper/269/810/556/naruto-shippuuden-namikaze-minato-wallpaper-preview.jpg"/>

    
    <input className="input" placeholder="Email" name="email" type="text" onChange={handleChange} />
    {errorMessage.length > 0 && (
        <span style={{ marginBottom:"10px",color:'red' }}>
        {errorMessage}
        </span>
        )}
    <input className="input" placeholder="Password" name="password" type="password"onChange={handleChange}/> 
    {errorMessage.length > 0 && (
        <span style={{ marginBottom:"10px",color:'red' }}>
        {errorMessage1}
        </span>
        )}
       

    <button className="btn">Login</button>
</form>
</div>



        </>
    )
}
 export default Login; 