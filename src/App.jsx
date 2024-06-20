
// import Header from "./Header";
// import Middle from "./Middle";
// import Footer from "./Footer";



// const App=()=>{
//   return(
//     <>
    
//     <h1>Welcome to cybrom !!!!!</h1>
//     <Header/>
//     <Middle/>
//     <Footer/>

//     </>
//   )
// }

// export default App;
// ==================================================
// const age=45;
// const name="Riya";

// ==============================================
// const sub=<ul>
//    <li>PHP</li>
//    <li>Java</li>
//    <li>Asp</li>
//    <li>Oracle</li>

// </ul>

// const App=()=>{
//     return(
//       <>
      
//       <h1>hello my subject is : {sub}</h1>
    
  
//       </>
//     )
//   }
// export default App;

// =========================================================
/*
import Header from "./Header";
import Data from "./Data";
import Footer from "./Footer";

const App=()=>{
    return(
      <>
      
        
        
        <Header/>
         <hr />
        <Data/>
        <hr />
        <Footer/>
  
      </>
    )
  }
export default App;

*/
// ==================================
/*
import Employee from "./Employee";

const App=()=>{
    return(
      <>
      <h1> Details of Employee: </h1>
      <Employee nm="Raj" empno="501" sal="32000"/>
        
        
        
      </>
    )
  }
export default App;
*/

// =====================================================
/*
import Student from "./Student";

const nm="riya";
const cls="mtech";
const fees="32000";

const App=()=>{
    return(
      <>
      <h1> Details of Student: </h1>
      <Student nm={nm} cls={cls} fee={fees}/>
        
        
        
      </>
    )
  }
export default App;
*/
// =======================================================================================
// =========================20 june==(using object)================
/*
import Cybrom from "./Cybrom"

const student={                                 //props using object
  "rollno":1221,
  "name":"Tanya",
  "city":"Bhopal"

}

const App=()=>{
  return(
    <>
    <h1>Welcome to cybrom class bhopal</h1>
     <Cybrom rno={student.rollno} nm={student.name} city={student.city}/>
    </>
  )
}
export default App;
*/
// ===================================Map======================================

// const App=()=>{

//   const name=["ram","shyam","mohan","sohan"];
//   const ans=name.map((key)=>{
//     return(
//       <>
//        <h1>{key}</h1>
//       </>
//     )
//   })

//   return(
//     <>
//     <h1>List of student</h1>
//     {ans}
//     </>
//   )
// }

// export default App;

// =============================================================
/*
const name=[30,50,76,90];
const ans=name.map((key)=>{
  return(
    <>
     <h1>{key*100}</h1>
    </>
  )
})
const App=()=>{
  return(
    <>
    <h1>List of number</h1>
    {ans}
    </>
  )
}

export default App;
*/

//====================================================================
/*
const city=["bhopal","goa","shimla","manali","gwalior","ujjain"];

const ans=city.map((key)=>{
  return(
    <>
     <option>
      {key}
     </option>
    </>
  )
})
const App=()=>{
  return(
    <>
    <h1>List of city</h1>
    <select >
    {ans}
    </select>
    
    </>
  )
}

export default App;
*/
// =================================================================

const subject=["php","oracle","java","css","html","react","python"];

const App=()=>{
const mysub=subject.map((key)=>{
  return(
    <>
     <li>
      {key}
     </li>
    </>
  )

})
return(
  <>
  <h1>List of city</h1>
  <ol>
  {mysub}
  </ol>
  
  </>
)
}
export default App;



