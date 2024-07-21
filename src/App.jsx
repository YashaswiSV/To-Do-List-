
import Comp1 from "./Comp1";
import { useState } from "react";

const App = () => {
  const [user , setUser]=useState("shubhi")
  return ( 
    <>
      <h1>welcom : {user}</h1>
      <Comp1 user={user}/>
    </>
   );
}
 
export default App;