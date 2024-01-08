import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SingleItemMenu from './SingleItemMenu'
const RestaurantsMenu = () => {
    const [menuItems, setMenuItems] = useState({})
    //useParams rading the url and returning the obj of all the parameter we have pass in the url :id , :name
    const { id } = useParams()
    useEffect(() => {
        getMenuData();
    }, [])

    async function getMenuData() {
        const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7122218&lng=75.84813&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
        try {
            const data = await fetch(url)
            const json = await data.json()
            console.log(json)
            const indexofcard = json?.data?.cards?.length - 1 ;
            setMenuItems(json?.data?.cards[indexofcard].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
            console.log(menuItems);//json.data.cards[json.data.cards.length - 1].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name
            console.log(indexofcard)
        }
        catch (e) {
            console.error(e);
        }
        // const name = json.data.cards[json.data.cards.length - 1].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name
    }
    return (
        <>
            <h1>Welcome to the ID : {id}</h1>
        </>
    )
}

export default RestaurantsMenu;