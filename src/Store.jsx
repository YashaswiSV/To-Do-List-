import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
const Store=configureStore({
          
    reducer:{
       
       todolist:todoReducer
    }
}) 
 
export default Store;