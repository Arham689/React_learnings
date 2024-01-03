import React from 'react'
import {useState} from 'react'

 const Header = () =>{
  const [isLogedin , setIsLogedin] = useState(false)
    return(
      <div className='Nav-top-level'>
        <img src = "../applogo.png"
         alt="logo"
         width={120}
         />
         <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>{isLogedin ?
            <button onClick={()=>{setIsLogedin(!isLogedin)}}>logOUt</button> : 
            <button onClick={()=>{setIsLogedin(!isLogedin)}}>login</button>}
          </li>
         </ul>
      </div>
    )
  } 

  export default Header;