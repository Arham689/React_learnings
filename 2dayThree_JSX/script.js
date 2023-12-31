import React from 'react'
import ReactDom from 'react-dom/client'
//react element
let haeder2 = React.createElement("h2",
    {
        key: "h2",
        className: "h1",
        id: "h2"
    },
    "this is the second headgin"
)

// creating functional component 

const Header = ()=>{
    return(
        // jsx

        <div className='container'>
            <h1>this is a functional component🔥</h1>
            {haeder2}
        </div>
    );
}

let root = ReactDom.createRoot(document.getElementById("root"));
root.render(Header())
