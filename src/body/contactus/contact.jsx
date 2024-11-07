import React, { useState } from 'react';
import Signup from '../connect/signup/signup';
import Login from '../connect/login/login';


function ContactUs() {

    const [loginTab,setLoginTab]=useState(true);
    const [signupTab,setSignupTab]=useState(false);

    let loginTabBtn=()=>{
        if(!loginTab){
            setLoginTab(true);
            setSignupTab(false);
        }
        
        
    }

    let signupTabBtn=()=>{
        if(!signupTab){
            setSignupTab(true);
            setLoginTab(false);
           
        }
      
       
    }

    return ( 
    <>
    <div className='text-center mt-[6rem] my-4'>
            <h1 className='font-semibold text-3xl'>Desk Fitness App</h1>
            <p>Stay active while you work!</p>
            </div>

            <div className='w-[80%] m-auto tabs flex justify-around bg-gray-300 my-1 p-1 font-semibold rounded md:w-[50%]'>
            <p className={loginTab? 'cursor-pointer bg-white px-7 rounded':'bg-none cursor-pointer px-7'} onClick={loginTabBtn}>Login</p>
            <p className={signupTab? 'cursor-pointer bg-white px-7 rounded':'bg-none cursor-pointer px-7'} onClick={signupTabBtn}>Sign Up</p>
            </div>

            {loginTab?<Login/>:<Signup/>}
    </> 
    
);
}

export default ContactUs;