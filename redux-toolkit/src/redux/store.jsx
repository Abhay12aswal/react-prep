import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './slices/cartSlice'

export const store = configureStore({
    reducer:{
        cart: cartSlice
    }
})



// import { createStore } from "redux";

// const reducer = (state=1, action)=>{
//     switch(action.type){
//         case "increment" : return state+1;
//         case "decrement" : return state-1;
//         default: return state;
//     }
// }

// export const store = createStore(reducer);