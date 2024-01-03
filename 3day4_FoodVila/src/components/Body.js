import React from "react";
import Card from './Card'
import Shimmer from './shimmer'
import { useState } from "react";
import { restaurantList } from '../config'
const Body = () => {
  const [term, setTerm] = useState("");
  const [felteredItems, setFelteredItmes] = useState(restaurantList)
  // const [allItems, setAllItems] = useState(restaurantList);
  const allItems = restaurantList
  function felterTheData(term, resList) {
    if (!term) {
      return resList;
    }
    let lowerTerm = term.toLowerCase()
    // this filter will return a array at the fun call haing content having only that is matched to term 
    return resList.filter((item) => { return item.info.name.toLowerCase().includes(lowerTerm) })
  }
  // on every re-render this function get called and a new array will get stored in felteredItem

  // useEffect(() => {
  //   getRestData();
  // }, [])

  // async function getRestData() {
  //   const fetchedData = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING')
  //   let json = await fetchedData.json()
  //   // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //   setFelteredItmes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  //   setAllItems(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  //   console.log(allItems);
  // }

  // (allItems.length === 0) ? <Shimmer/> : 
  return (
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
            return <Card key={restaurant?.info?.id} {...restaurant?.info} />
          })
        }
      </div>
    </div>

  )
}

export default Body

