import React, { useEffect, useState, } from 'react';
import Signup from '../signup/signup';
import axios from 'axios';

import { Link } from 'react-router-dom';
import './login.css';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Formik,Form,ErrorMessage,Field} from 'formik';
import * as Yup from 'yup';

function Login() {

    const currentUserById=localStorage.getItem("userId");
    console.log(currentUserById);
    const nagivate=useNavigate();
 
    const [loading,setLoading]=useState(false);
    
    let handleForm=async(formData)=>{
        console.log("submitted");
        await axios.post("http://localhost:4000/login",formData)
        .then((res)=>{
            console.log(res);
            if(res.data){
                console.log(res.data);
                if(res.data.msg){
                toast.success(res.data.msg);
                localStorage.setItem("token",res.data.token);
                localStorage.setItem("userId",res.data.userId);
                localStorage.setItem("username",res.data.username);
                setLoading(false);
                nagivate('/')


                }
                if(res.data.error){
                toast.error(res.data.error);
                setLoading(false);

            }
            }
        })
        .catch((e)=>{console.error(e); setLoading(false)});

    }

    const validate=Yup.object({
        email:Yup.string().email("enter valid email").required("*Required"),
        password:Yup.string().required("*Required")
    })


    return (
        <Formik
        initialValues={{email:'',password:''}}
        validationSchema={validate}
        onSubmit={handleForm}
        >
        {()=>(

        <div className='w-[80%] mx-auto md:w-[50%]'>
            <Form className='flex flex-col'>

            <div className='flex gap-1'>
            <label htmlFor="email" className='font-semibold'>Email</label>
            <ErrorMessage name='email' component="div" className='text-red-500' />
            </div>

            <Field  id="email" className='rounded border  p-1 border-blue-500 my-2' type="email" placeholder="enter email" name="email" />
            <div className='flex gap-1'>
            <label htmlFor="password" className='font-semibold'>Password</label>
            <ErrorMessage name='password' component="div" className='text-red-500' />
            </div>
            <Field id="password"  className='rounded p-1 border border-blue-500 my-2' type="password" name="password" placeholder="password" />
            
            <button disabled={loading} className=' my-1 rounded bg-black text-white p-1 font-semibold' type='submit'>{loading?"Loading...":"Login"}</button>
            </Form>
        </div>
        )}
        </Formik>
     );
}

export default Login;