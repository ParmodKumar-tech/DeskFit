import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'
import Navbar from './navbar/navbar'
import ExerciseCard from './body/exercise/exercise_card/exercisecard'
import Exerciseinfo from './body/exercise/exercise_info/exerciseinfo'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Hero from './body/exercise/hero/hero';
import ContactUs from './body/contactus/contact'
import Signup from './body/connect/signup/signup'
import Login from './body/connect/login/login'

import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
 <>

  <BrowserRouter>
  <Navbar/>
  <div><Toaster  position="top-right"
  reverseOrder={false}/></div>
  <Routes>

    <Route path='/' element={ <><Hero/> <ExerciseCard/></>}></Route>
    <Route path='/exerciseinfo/:idx' element={<Exerciseinfo/>}></Route>
    <Route path='/contactus' element={<ContactUs/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>

  </Routes>
  </BrowserRouter>
 
  </>
  
)
