
// ===========================React Counter increment decerement reset==================================

import { useState } from "react"
const App=()=>{
  const [cnt,setCnt]=useState(0);
    

  const myInc=()=>{
      setCnt(cnt+1)

  }
  const myDec=()=>{
    setCnt(cnt-1)

}
   const myReset=()=>{
  setCnt(0)

}
  return(
    <>
        <center>
          <h1>welcome to the counter app</h1>
          <h2>My count : {cnt}</h2>

          <button onClick={myInc}>Increment</button>
          <button onClick={myDec}>decrement</button>
          <button onClick={myReset}>Reset</button>

        </center>
    </>
  )
}
export default App;
