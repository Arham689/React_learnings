import React, { useContext } from "react";
import '../../style.css'
import { imgBaseUrl } from '../config'
import myContext from "../../utils/constext";
import { useDispatch } from "react-redux";
import { addToCart } from "../../utils/cartSlice";
const SingleItemMenu = ({ Menu}) => {
    const dispatch = useDispatch()
    const { user } = useContext(myContext)

    let cost = Menu?.card?.info?.price
    if (!cost) {
        cost = Menu?.card?.info?.defaultPrice
    }

    return <>
        <div className='single-menu-container'>
            <div>
                <h2>
                    {/* welcome to Menu : {id}  */}
                    {Menu?.card?.info?.name}

                </h2>
                <h4> &#8377; {cost / 100}</h4>
                <p>
                    {Menu?.card?.info?.description}
                </p>
                {/* <p>{user.name}</p> */}

                <div>
                    <button className="Add-btn" onClick={() => {
                        dispatch(addToCart(Menu))
                    }}>Add</button>
                </div>

            </div>
            <div>
                <img width={250} height={250} src={imgBaseUrl + Menu?.card?.info?.imageId} alt="can't load image" />
            </div>

        </div>
    </>
}

export default SingleItemMenu