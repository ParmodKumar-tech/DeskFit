import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';

function Navbar(){
    const currUsername=localStorage.getItem("username");
    const [menuItems,setMenuItems]=useState(false);

    let handleMenuItems=(click)=>{
        console.log(click.target);
        setMenuItems(!menuItems);
      
       
    }

    return(
       <header className='header'>
        <h2>DeskFit</h2>
        <nav className={menuItems?"nav-visible":"nav"}>
            <ul className='nav-items'>
                
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/contactus">Contact</NavLink></li>
                <p className='separator my-auto font-bold'>|</p>
                <p className='username align-middle my-auto mx-2'>{currUsername?currUsername:"Not login"}</p>

            </ul>

        </nav>
        
        <div className='menu-icon' onClick={handleMenuItems}>
            <div></div>
            <div></div>
            <div></div>
        </div>

       

       </header>
    )
}

export default Navbar;
