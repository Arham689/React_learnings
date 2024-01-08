import React from "react";
import '../../style.css'
import { imgBaseUrl } from '../config'
const SingleItemMenu = ({Menu}) => {
    console.log(Menu);
    return<>
        <div className='single-Menu-container'>
                <div>
                    <h3>
                        {/* welcome to Menu : {id}  */}
                        Name : {Menu[0]?.card?.info?.name}

                    </h3>
                    <h4> &#8377; {Menu[0]?.card?.info?.defaultPrice / 100}</h4>
                    <p>
                        {Menu[0]?.card?.info?.description}
                    </p>
                </div>
                <div>
                    <img width={250} src={imgBaseUrl + Menu[0]?.card?.info?.imageId} alt="kjk" />
                </div>
            </div>
    </>
}

export default SingleItemMenu