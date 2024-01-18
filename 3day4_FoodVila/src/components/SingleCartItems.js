import React , {useContext} from "react";
import '../../style.css'
import { imgBaseUrl } from '../config'
import myContext from "../../utils/constext";
import {  useDispatch, useSelector } from "react-redux";
import {removeFromCart } from "../../utils/cartSlice";
const SingleCartItems = ({Menu }) => {
    const dispatch = useDispatch() 
    const { user }  = useContext(myContext)
    let cost = Menu?.card?.info?.price 
    if(!cost) 
    {
        cost = Menu?.card?.info?.defaultPrice
    }

    return<>
        <div className='single-menu-container'>
                <div>
                    <h2>
                        {/* welcome to Menu : {id}  */}
                        {Menu?.card?.info?.name} X {Menu.card.count}

                    </h2>
                    <h4> &#8377; {cost / 100}</h4>
                    <p>
                        {Menu?.card?.info?.description}
                    </p>
                    {/* <p>{user.name}</p> key={menu.card.info.id} */}
                    
                        <button className="Remove-btn" onClick={()=>{
                            dispatch(removeFromCart(Menu.card.info.id))
                        }}>Remove</button> 
                    
                </div>
                <div>
                    <img width={250} height={250} src={imgBaseUrl + Menu?.card?.info?.imageId} alt="can't load image" />
                </div>
                
            </div>
    </>
}

export default SingleCartItems 