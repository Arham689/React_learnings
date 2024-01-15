import React from "react"
const Section = (
    {title , 
    desc , 
    isVisible , 
    setIsVisible  
    }) =>{
    return (
        <>
            <h1>{title}</h1>
            <span>
                {
                isVisible ?
                <button onClick={()=>{setIsVisible(false)}}>hide</button> : 
                <button onClick={()=>{setIsVisible(true)}}>show</button>
                }
            </span>

            {isVisible && <h3>{desc}</h3>}
        </>
    )
}

export default Section