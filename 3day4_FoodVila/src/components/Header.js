import React, { useContext } from 'react'
import {useState} from 'react'
import logo from '../assets/img/applogo.png'
import { Link } from 'react-router-dom'
import myContext from '../../utils/constext'
import { useSelector } from 'react-redux'
 const Header = () =>{
  const cartItems = useSelector(store => store.cart.items)
  // console.log(cartItems);
  const [isLogedin , setIsLogedin] = useState(false)
  // const {user } = useContext(myContext);
    return(
      <div className='Nav-top-level'>
        <img height={59}
         src={logo} alt="" />
         <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li ><Link to={'/about'}>About us</Link> </li>
          <li><Link to={'/contact'}>Contact us</Link></li>
          <li><Link to = {'/cart'}>Cart-{cartItems.length} </Link></li>
          <li><Link to = {"/instamart"}>Instamart</Link></li>
          {/* <li>{user.name}</li>
          <p>{user.email}</p> */}
          <li>{isLogedin ?
            <button onClick={()=>{setIsLogedin(!isLogedin)}}>logOUt</button> : 
            <button onClick={()=>{setIsLogedin(!isLogedin)}}>logOUt</button>}
          </li>
         </ul>
      </div>
    )
  } 

  export default Header;



/* 




RTK
Create Store

- configureStore() - RTK

Provide my stor to app

- <Provider store = {store}> - import from react-redux
Slice

- RTK - createSlice({
  name: "",
	initialState:
	reducers: {
    we can directly update the state in redux
    addItem: (state, action)= { state= action.payload}
	}
})

export const faddItem, removeItem} = cartSlice.actions;

export default cartSlice.reducer;

Put that Slice into Store

-｛
reducer: {
  cart : cartSlice ,
	user : userSlice
}
}

subscribe to the store 
- useSelector(store.cart.title) =>  React - Redux

dispatch an action 
const dispatch = useDispatch() =>  React - Redux

dispatch(action(pauload))
*/