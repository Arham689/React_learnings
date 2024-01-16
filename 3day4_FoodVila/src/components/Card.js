import React, { useContext } from "react";
import {imgBaseUrl} from '../config'
import myContext from "../../utils/constext";
const Card = ({name , cuisines , sla , avgRatingString , cloudinaryImageId})=>{
  const {user }  = useContext(myContext)
    return(
      <div className='Card-container'>
        <img src={imgBaseUrl + cloudinaryImageId}
          width={250}
          height={250}
        />
        <h2>{name.substring(0,11)}...</h2>
        {/* <p>{user.name}</p> */}
        <h4>{cuisines.join(",").substring(0,18)}...</h4>
        <h4>{sla.slaString}</h4>
        <h6>{avgRatingString}🔥</h6>
      </div>
    )
  }

export default Card ;