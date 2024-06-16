import React from 'react'
import { Form } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"
 

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const submitUser = () => {
        axios
            .post("http://localhost:1337/auth/local/register", {
                username: username,
                email: email,
                password: password,
            })
            .then((response) => {
                // Handle success.
                console.log("Well done!");
                console.log("User profile", response.data.user);
                console.log("User token", response.data.jwt);
            })
            .catch((error) => {
                // Handle error.
                console.log("An error occurred:", error.response);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitUser();
    };
  return (
    <div className=''>
        <div className='max-w-lg border-2 p-8 rounded-lg shadow-lg w-1/2 m-auto my-20'>
        <div>
            <img scr=""></img>
            <h2 className="heading font-sans">Signup</h2>
            <p className='sub-heading'>Already a member? 
            <a href='#' className='text-blue-700 font-semibold font-sans'> Login in now</a>
            </p>
        </div>
        <div>
            <div className='mt-9'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label for="username" className='label font-sans'>Username</label>
                        <div>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} id="username" type='text' name="username" autoComplete='name' required className='shadow-sm border-2 py-1.5 rounded-lg px-3 w-full mt-2'></input>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <label for="email" className='label font-sans'>Email</label>
                        <div>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type='email' name="email" autoComplete='email' required className='shadow-sm border-2 py-1.5 rounded-lg px-3 w-full mt-2'></input>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <label for="password" className='label font-sans'>Password</label>
                        <div>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" type='password' name="password" autoComplete='password' required className='shadow-sm border-2 py-1.5 rounded-lg px-3 w-full mt-2'></input>
                        </div>
                    </div>
                    {/* <div className='mt-6 flex justify-between'>
                        <div>
                            <input id="remember-me" name="remember-me" type="checkbox" className=""></input>
                            <label for="remember-me" className="ml-3 font-sans">Remember me</label>
                        </div>
                        
                    </div> */}
                    <div className='mt-6'>
                        <button className="py-1.5 px-3 justify-center w-full bg-blue-700 rounded-md text-white font-sans font-semibold" type='submit'>Signup</button>
                    </div>
                    
                </form>
            </div>
            <div className='mt-10'>
                <div className='relative'>
                    <div className='flex items-center absolute w-full top-3 right-0 '>
                        <div className='w-full border-t-2 border-slate-300 border-solid block '></div>
                    </div>
                    <div className='justify-center flex '>
                        <span className="px-6 bg-white z-10 font-sans">Or continue with</span>
                    </div>
                </div>
                
                <div className='mt-6'>
                <a href="#" className="flex items-center py-2 px-3 rounded-md justify-center gap-3 w-full border-slate-300 border-solid border-2"><svg className="w-5" aria-hidden="true" viewBox="0 0 24 24"><path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335"></path><path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4"></path><path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05"></path><path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="#34A853"></path></svg><span className="font-sans font-semibold">Google</span></a>
                </div>
            </div>
        </div>
      
    </div>
    </div>
    
  )
}

export default Register