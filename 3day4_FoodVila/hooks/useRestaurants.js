import React from 'react'
import {useState , useEffect} from 'react'

const useRestaurants = (id) => {
    const [menuItems, setMenuItems] = useState([])
    useEffect(() => {
        getMenuData();
    }, [])
    async function getMenuData() {
        const url = `https://instafood.onrender.com/api/menu?lat=12.9351929&lng=77.62448069999999&restaurantId=${id}`
        try {
            const data = await fetch(url)
            const json = await data.json()
            console.log(json)
            // let indexofcard = json?.data?.cards?.length - 1 ;
            // indexofcard === 2 ?setMenuItems(json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards) :setMenuItems(json?.data?.cards[5].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
            // setMenuItems(json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
            // console.log(menuItems);//json.data.cards[json.data.cards.length - 1].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name

            //for more scope refer harshitha solai varadarajna

            const updatedMenuItems = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
            if(!updatedMenuItems)
            {
                //this condition is because in some card the data is comming in 1st cards or some times in 2nd cards
                const updatedMenuItems2 = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
                setMenuItems(updatedMenuItems2);
            }
            else
            {
                setMenuItems(updatedMenuItems);
            }

            console.log(updatedMenuItems);
        }
        catch (e) {
            console.error(e);
        }
        // const name = json.data.cards[json.data.cards.length - 1].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name
    }

    return menuItems
}

export default useRestaurants;