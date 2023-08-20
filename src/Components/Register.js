import { useState } from "react";
import  "./Register.css";
import { Inputbox } from "./Inputbox";
import { Link } from "react-router-dom";


export const Register = () => {
    const [values,setvalues] = useState({
        name:"",
        email:'',
        password:"",
        errorMessage:"",
        confirmpassword:""
    }) ;

    let inputs = [
        {
            id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Check a password between 8 to 16 characters which contain only characters,numeric digits and underscore and first character must be a letter.",
      label: "Password",
      pattern: `^(?=(.[A-Z]){1})(?=(.[a-z]){1})(?=(.[0-9]){1})(?=(.[@#$%^!&+=.\-]){2})([a-zA-Z0-9@#$%^!&+=.\-]){8,16}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
    ];

const handleSubmit = (e) => {
    e.preventDefault();
    window.location.assign("/login");
};
const onChange = (e) =>{
    setvalues({...values, [e.target.name]:e.target.value });
};
console.log.apply(values);


 




return(

//  <div style={{backgroundImage:`url(https://r4.wallpaperflare.com/wallpaper/553/504/880/anime-hatake-kakashi-hiruzen-sarutobi-hokage-wallpaper-3b06ecbd9321ff5985c42b397dbc8cf0.jpg)`}}>

<div className="register1" >
    <form className="form" onSubmit={handleSubmit}>
    <p className="title">Register </p>
    <img src="https://c4.wallpaperflare.com/wallpaper/900/820/852/anime-boruto-boruto-uzumaki-minato-namikaze-wallpaper-preview.jpg"/>

    <p className="message">Signup now and get full access to our app. </p>
        <div class="flex">
        {inputs.map((input) =>{
    return (
        <Inputbox 
        key={input.id}
        {...input}
        value={values[input.name]}
        onChange={onChange}
        />
  
    );
})}
        </div>

     
    <button className="submit" >Register</button>
    <p className="signin">Already have an acount ? <Link to="/login">Log in</Link> </p>
    </form>

</div>


// </div>
  
  
)}
