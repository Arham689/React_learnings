import React from "react";
import ReactDOM from "react-dom/client";
// these all are React component which is just a object at end of the day , not slightly different form react component~!


//create element 
let header = React.createElement("h1", { // here header is a obj , not a HTML element , the render method will turn this obj into a real element 
    className: "h1",
    id: "helder",
    key: "h1"
}, "eloo from react");
//tag , attributes , content

let haeder2 = React.createElement("h2",
    {
        key: "h2",
        className: "h1",
        id: "h2"
    },
    "this is the second headgin"
)

// this is the code that i write 
const heading4 = <h1 id = "heading" key = "h1" porps = "hooooooo!">Babel is fire🔥🔥</h1>

// and this 👆👆 code is converted into this 👇👇 by babel

// this shit is created by babel by converting the jsx => React.createElement() => object 
const heading3 = /*#__PURE__*/React.createElement("h1", {
    id: "heading",
    key: "h1",
    porps: "hooooooo!"
}, "Babel is fire\uD83D\uDD25\uD83D\uDD25");


// you can also create nesting of element and make siblings in your page 

let container = React.createElement("div",
    {
        id: "container"
    },
    [header, haeder2 , heading3]
)


// create root which intereact with real DOM  
let root = ReactDOM.createRoot(document.getElementById("root"));

//now render it or show to ui 
root.render(container);




/**
 * what parcel is doing : 
 * HRM - hot module replacement 
 * file watchign algo - written in cpp
 * Building 
 * Dev and production buil 
 * MINIFYING     
 * super fast 
 * Image and media optimization 
 * Cacheing while development which make the process very fast
 * Cleaing our code (removing  -> console.log)
 * Compression -> reaniming 
 * Compatible with older version of browsrs
 * HTTPS on development enviorment on local host -> npx parcel index.html --https
 * managing local port numbers  
 * Zero config  
 * transitive dependenies
 * ==parcel usign its own space -> .parcel-cache file== 
 */