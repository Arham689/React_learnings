import React from 'react'
import cart from '../assets/cart-shopping-solid.svg'
const CartIsEmpty = ()=> {
    return (
        <div className='empty-cart'>
        <h1>your cart is empty </h1>
        <img width={500} height={500} src={cart}></img>
        </div>

    )
}

export default CartIsEmpty