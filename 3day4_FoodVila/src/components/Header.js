import React from 'react'
import {useState} from 'react'
import logo from '../assets/img/applogo.png'
import { Link } from 'react-router-dom'
 const Header = () =>{
  const [isLogedin , setIsLogedin] = useState(false)
    return(
      <div className='Nav-top-level'>
        <img height={59}
         src={logo} alt="" />
         <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li ><Link to={'/about'}>About us</Link> </li>
          <li><Link to={'/contact'}>Contact us</Link></li>
          <li><Link to = {"/instamart"}>Instamart</Link></li>
          
          <li>{isLogedin ?
            <button onClick={()=>{setIsLogedin(!isLogedin)}}>logOUt</button> : 
            <button onClick={()=>{setIsLogedin(!isLogedin)}}>login</button>}
          </li>
         </ul>
      </div>
    )
  } 

  export default Header;