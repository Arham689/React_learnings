import React from "react";
import Card from './Card'
import Shimmer from './shimmer'
import { useState , useEffect } from "react";
import { restaurantList } from '../config'
import {Link} from 'react-router-dom'
const Body = () => {
  const [term, setTerm] = useState("");
  const [felteredItems, setFelteredItmes] = useState([])
  const [allItems, setAllItems] = useState([]);

  function felterTheData(term, resList) {
    if (!term) {
      return resList;
    }
    let lowerTerm = term.toLowerCase()
    // this filter will return a array at the fun call haing content having only that is matched to term 
    return resList.filter((item) => { return item.info.name.toLowerCase().includes(lowerTerm) })
  }
  // on every re-render this function get called and a new array will get stored in felteredItem

  useEffect(() => {
    getRestData();
  }, [])

  async function getRestData() {
    const fetchedData = await fetch('https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999')
    // https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7122218&lng=75.84813&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
    let json = await fetchedData.json()
    // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    let temp1 = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setFelteredItmes(temp1)
    let temp2 = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setAllItems(temp2)
    // console.log(allItems)
  }

  // (allItems.length === 0) ? <Shimmer/> : 
  return (allItems?.length === 0) ? <Shimmer/> :  (
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

