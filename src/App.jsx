import { useSelector,useDispatch } from "react-redux";
import { addTask } from "./todoSlice";
import { useState } from "react";

const App = () => {
  const [val , setVal]=useState("");
  const mytask=useSelector((state)=>state.todolist.task)
 const mydis= useDispatch();

  const taskAdd=()=>{
   mydis(addTask({id: Date.now(), task:val}))
  }
   let sno=0;
   const ans=mytask.map((key)=>{
      sno++;
      return(
         <> 
         <tr>
            <td>{sno}</td>
            <td>{key.task}</td>
         </tr>
         </>
      )
   })
  
   
    return ( 
        <>
         <h1>ToDo list</h1>
         Enter task:
          <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} />
          <button onClick={taskAdd}>Add</button>
          <hr />
          <table>
              <th>Sno</th>
              <th>Task</th>
              {ans}
          </table>
        </>
     );
}
 
export default App;