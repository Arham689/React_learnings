import React from "react";
import Card from './Card'
import { useState } from "react";
import {restaurantList} from '../config'
const Body =() => {
  const [term , setTerm ] = useState("");
    function setFelteredItmes(term , restaurantList )
    { 
        if(!term)
        {
          return restaurantList;
        }
        let lowerTerm = term. toLowerCase() 
        // this filter will return a array at the fun call haing content having only that is matched to term 
        return restaurantList.filter((item)=>{return item.info.name.toLowerCase().includes(lowerTerm)})
    } 
    // on every re-render this function get called and a new array will get stored in felteredItems
    let felteredItems = setFelteredItmes(term , restaurantList)

    return(
      <div className="Body_cont">
        <form action="none">
          {/* event listner on starch bar to change the term  */}
          <input className="Search_txt" 
          type="text" onChange={(e)=>setTerm(e.target.value) }
          placeholder="Search..."
          />
        </form>
          
      <div className='Body-top-level'>
        {
          felteredItems.map((restaurant)=>{
          return <Card key={restaurant.info.id} {...restaurant.info} />
          })
        }
      </div>
      </div>
      
    )
  }

  export default Body