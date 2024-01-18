import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import SingleItemMenu from './SingleItemMenu'
import { clearCart } from '../../utils/cartSlice'
import SingleCartItems from './SingleCartItems'
import CartIsEmpty from './CartIsEmpty'
const CartItems = () =>{
    const menus = useSelector(store => store.cart.items)
    const dispatch = useDispatch()
    if(menus.length === 0)
    {
        return<CartIsEmpty/>
    }
    return (
        <div className='cart-cont'>
            
            {
                menus.map((menu)=>{return<SingleCartItems key={menu.card.info.id} Menu = {menu} />})
            }
            <button className='clear-btn' onClick={()=>{
                dispatch(clearCart())
            }}>Clear Cart</button>
        </div>
    )
}


export default CartItems