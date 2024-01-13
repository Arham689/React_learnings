import React ,{useEffect , useState} from 'react'

const useData = () => {
    const [felteredItems, setFelteredItmes] = useState([])
    const [allItems, setAllItems] = useState([]);

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

  return [allItems , felteredItems ,setFelteredItmes]
}

export default useData