import React, { useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, settPass] = useState('')

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     console.log(email, pass);
    //     }

    return (
        <>
        <form>
            <label for="email" className="label">Email</label>
                <input value={email} type="email" id='emailInput' placeholder="email@example.com"/>
        
            <label for="password" className="label">Password</label>
                <input value={pass} type="password" id='passwordInput' placeholder="********"/>
            <button type="submit" id='submitBtn'>Login</button>
            <a href='{Register}'>
                <p className="regLink">Don't have an account? Register Here</p>
            </a>  
        </form>
        </>

    )
}