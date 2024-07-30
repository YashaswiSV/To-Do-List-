import { configureStore } from "@reduxjs/toolkit";


import myreducer from "./Colorslice"

const Store=configureStore({
          
    reducer:{
       
        mycolor:myreducer,
    }
}) 
 
export default Store;