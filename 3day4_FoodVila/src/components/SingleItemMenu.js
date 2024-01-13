import React from "react";
import '../../style.css'
import { imgBaseUrl } from '../config'
const SingleItemMenu = ({Menu}) => {
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
                        {Menu?.card?.info?.name}

                    </h2>
                    <h4> &#8377; {cost / 100}</h4>
                    <p>
                        {Menu?.card?.info?.description}
                    </p>
                    <div>
                    <button>-</button> 0 <button>+</button>
                    </div>
                </div>
                <div>
                    <img width={250} height={250} src={imgBaseUrl + Menu?.card?.info?.imageId} alt="can't load image" />
                </div>
                
            </div>
    </>
}

export default SingleItemMenu