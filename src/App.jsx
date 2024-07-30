import { useSelector,useDispatch } from "react-redux";
import { changeColor } from "./Colorslice";
import { useState } from "react";

const App = () => {
   const [clr, setClr] = useState("");
  
   const myclr=useSelector((state)=>state.mycolor.bgcolor);
   const mydis=useDispatch();
    return ( 
        <>
           <h1>My color App by Redux ToolKit</h1>
         
           Enter Color : <input type="text" value={clr} onChange={(e)=>{setClr(e.target.value)}} />
           <button onClick={()=>mydis(changeColor(clr))}>ChangeColor</button>
           <div style={{width:"300px" , height:"300px", backgroundColor:myclr}}></div>
        </>
     );
}
 
export default App;