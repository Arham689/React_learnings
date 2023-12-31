import React from 'react'

 const Header = () =>{
    return(
      <div className='Nav-top-level'>
        <img src = "https://scontent.fidr2-1.fna.fbcdn.net/v/t39.30808-6/289363084_5138984502865307_2230410801688185307_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=783fdb&_nc_ohc=Ron1xEFRfm0AX_PM54k&_nc_ht=scontent.fidr2-1.fna&oh=00_AfD9O7d6l3jXE6kmNWkq6cybhyWH-AfxkZQdzV8bAuDB0Q&oe=6588C374"
         alt="logo"
         width={120}
         />
         <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>search</li>
         </ul>
      </div>
    )
  } 

  export default Header;