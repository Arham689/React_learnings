import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store = configureStore(
    //it will take a reducer as an argument 
    {
        reducer : {
            //we can pass multiple reducers 
            cart : cartSlice
        }
    }
)

export default store