import React from 'react'
import useRestaurants from '../../hooks/useRestaurants'
import { useParams } from 'react-router-dom'
import SingleItemMenu from './SingleItemMenu'
import Shimmer from './shimmer'
const RestaurantsMenu = () => {
    
    //useParams rading the url and returning the obj of all the parameter we have pass in the url :id , :name
    const { id } = useParams()

    const menuItems = useRestaurants(id);

    return (menuItems.length === 0 )?<Shimmer/> :(
        <>
            <h1>Welcome to the iD : {id}</h1>
            
            {   
                menuItems.map((menu)=>{
                    return <SingleItemMenu key={menu.card.info.id} Menu = {menu}/> 
                })   
            }
        </>
    )
}

export default RestaurantsMenu;