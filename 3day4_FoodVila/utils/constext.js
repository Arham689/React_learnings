import { createContext } from "react";

const myContext =createContext ({
    //default value gose here 
    user : {
        name : "dummy name ",
        email : "dummy email"
    },

})

export default  myContext