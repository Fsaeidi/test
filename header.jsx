import React from 'react';
import {useState} from "react";
import {FaBars} from 'react-icons/fa';


const Header= ()=>{
const [toggleMenu , setToggleMenu]= useState(false)

const myEvent=()=>{
  setToggleMenu(!toggleMenu);
}
    return(
        <header >
          <ul>
            <button style={{backgroundColor:'transparent', border:'none',cursor:'pointer' }}
            onClick= {myEvent}
            >
            <FaBars/>
            </button>
            <li>home</li>
            <li>blog</li>
            <li>about us</li>
            
          </ul>
             <hr />

          {(toggleMenu) ? <h1>my web</h1> : <i>not</i>}
        </header>
    )
}
export default Header;
