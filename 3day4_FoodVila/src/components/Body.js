import React from "react";
import Card from './Card'
import Shimmer from './shimmer'
import { useState , useEffect } from "react";
import { restaurantList } from '../config'
import {Link} from 'react-router-dom'
import {felterTheData} from '../../utils/helper'
import useData from "../../hooks/useData";
import useIsOnline from "../../hooks/useIsOnlie";
import OfflinePage from "./OfflinePage";
const Body = () => {
  const [term, setTerm] = useState("");
  const [allItems ,felteredItems , setFelteredItmes ] = useData();
  const onlineStatus = useIsOnline();

  if(!onlineStatus)
  {
    return <OfflinePage/>
  }

  // (allItems.length === 0) ? <Shimmer/> : 
  return (felteredItems?.length === 0) ? <Shimmer/> :  (
    <div className="Body_cont">
      <div >
        {/* event listner on starch bar to change the term  */}
        <input className="Search_txt"
          type="text" onChange={(e) => setTerm(e.target.value)}
          placeholder="Type here..."
        />
        <button onClick={() => {
          let data = felterTheData(term, allItems)
          setFelteredItmes(data);
        }}>
          Search
        </button>
      </div>

      <div className='Body-top-level'>
        {
          felteredItems && felteredItems.map((restaurant) => {
            // console.log(restaurant);
            return <Link to={'/menus/' + restaurant?.info?.id } key={restaurant?.info?.id}><Card  {...restaurant?.info} /></Link>
          })
        }
      </div>
    </div>

  )
}

export default Body

