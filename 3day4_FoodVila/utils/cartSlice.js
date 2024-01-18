import {  createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name:'cartslice',
        initialState : {
            items : [],
        },
        reducers:
        {
            addToCart : (state , action ) =>{
                let cartItems = action.payload
                // read about find , i think it will return the founded element 
                let itemIsPresent = state.items.find((i)=>i.card.info.id === cartItems.card.info.id)

                if(itemIsPresent)
                {
                    itemIsPresent.card.count += 1
                }
                else{

                    cartItems.card.count = 1 
                    state.items.push(cartItems) 
                }
                
              },
            clearCart : (state) =>{
                //we can directly change the state 
                state.items = [] 
            },
            removeFromCart :(state , action)=>{
                //add a featuer that find the id and remove on the basis of it 
                let id = action.payload;

                // let newItems =  state.items.filter((i)=>{
                //   return  (i.card.info.id !== id)
                // })
                // state.items = newItems


                let removingIndex = state.items.findIndex(i=>i.card.info.id === id)
                // console.log(state.items[removingIndex]);

                // this is because state.items[removingIndex] -> is logging a proxy obj 
                // let parcedJsonObject = JSON.parse(JSON.stringify(state.items[removingIndex].card))

                if(removingIndex !== -1)
                {
                    if(state.items[removingIndex].card.count > 1)
                    {
                        state.items[removingIndex].card.count -= 1;
                    }
                    else
                    {
                        state.items.splice(removingIndex ,1 )
                    }
                }
            },
        }
    }
)

export const {addToCart , clearCart , removeFromCart} = cartSlice.actions;

export default cartSlice.reducer