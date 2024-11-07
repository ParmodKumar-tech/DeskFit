import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Formik,Form,Field,ErrorMessage  } from 'formik';
import * as Yup from 'yup'; 
import { useNavigate } from 'react-router-dom';

function Signup() {
    
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();

    let handleForm=async(formData)=>{
        setLoading(true);
        console.log(formData)
        console.log("submited");
        await axios.post("http://localhost:4000/signup",formData)
        .then((res)=>{
            console.log(res);
            if(res.data.msg){
                    toast.success(res.data.msg);
                    localStorage.setItem("token",res.data.token);
                    localStorage.setItem("userId",res.data.userId);
                    localStorage.setItem("username",res.data.username);

                    setLoading(false);
                    navigate('/');
                    
                   
            }

            if(res.data.error){
                toast.error(res.data.error);
                setLoading(false);
            }
          
        })
        .catch((e)=>{ console.log(e); setLoading(false); });
    }

    const validate=Yup.object({
        username: Yup.string().min(4,"minimum 4 characters/more").required("*Required"),
        email:Yup.string().email("email is invalid").required("*Required"),
        password:Yup.string().min(5,"minimum 5 digit/character").required("*Required")
    })



    return (
        <Formik
        initialValues={{username:'',email:'',password:''}}
        validationSchema={validate}
        onSubmit={handleForm}
        >

        {()=>(

            <div className='w-[80%] mx-auto md:w-[50%]'>
            <Form className='flex flex-col '>
            
            <div className='flex gap-1'>
            <label htmlFor="username" className='font-semibold'>Username</label>
            <ErrorMessage name="username" component="div" className="text-red-500 " />
            </div>
            
            <Field  id="username" className='rounded border  p-1 border-blue-500 my-2' 
                    type="text" 
                    placeholder='username' 
                    name='username' />

            <div className='flex gap-1'>
            <label htmlFor="email" className='font-semibold'>Email</label>
            <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <Field   id="email" className='rounded border  p-1 border-blue-500 my-2' type="text" placeholder='enter email'name='email' />

            <div className='flex gap-1'>
            <label htmlFor="password" className='font-semibold'>Password</label>
            <ErrorMessage name="password" component="div" className="text-red-500" />
            </div>
            <Field  id="password" className='rounded p-1 border border-blue-500 my-2' type="password" name="password" placeholder='password' />

            <button disabled={loading} className='rounded bg-black text-white p-1 my-1 font-semibold' type='submit'>{loading?"Loading...":"Sign up"}</button>
            </Form>
        </div>


        )}
     
        </Formik>  
     );
}

export default Signup;