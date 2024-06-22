
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
/*
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

*/
// ======================================21 June==================================
/*
const student=[
  {
    rollno :121,
    name:"Rama",
    city:"Bhopal"
  },
  {
    rollno :122,
    name:"sanju",
    city:"Indore"
  },{
    rollno :123,
    name:"priya",
    city:"Goa"
  },
  {
    rollno :124,
    name:"yuvi",
    city:"gwalior"
  }
]

const ans=student.map((key)=>{
     return(
      <>
        
          <tr>
               <td>{key.rollno}  </td>
               <td>{key.name}  </td>
               <td>{key.city}  </td>

          </tr>
          
      
      </>
     )




})

const App=()=>{
  return (
    <>
    <h1>Table </h1>
        <table border="2" width="500" bgcolor="pink">
            <tr bgcolor="blue">
              <th>Roll no</th>
              <th>Name</th>
              <th>City</th>

            </tr>
            {ans}
        </table>
    </>
  )
}
export default App;
*/

// ==============================================================
/*
import EmployeeData from "./EmployeeData"

const myans=EmployeeData.map((key)=>{
           return(
            <>
                <tr>
                  <th>{key.empno}</th>
                  <th>{key.name}</th>
                  <th>{key.salary}</th>
                  <th>{key.city}</th>

                </tr>
            </>
           )



})

const App=()=>{
  return(
    <>
          <table  bgcolor="pink" width="500">
                   <tr>
                    <th>Employee no</th>
                    <th>Employee Name</th>
                    <th>Salary</th>
                    <th>City</th>


                   </tr>
                {myans}
          </table>
    
    </>
  )
}
export default App;
*/

// ==============================22 JUne=============================
/*
import Cybromnew from "./Cybromnew";
import Studentnew from "./Studentnew";

const ans=Studentnew.map((key)=><Cybromnew rn={key.Rollno} nm={key.Name} ct={key.City} fs={key.Fees}/>)


const App=()=>{
  return(
    <>
         <h1>Our Student list</h1>
         <table border={2} width={500} bgcolor="pink" align="center">
                <tr bgcolor="yellow">
                  <th>RollNo.</th>
                  <th>Name.</th>
                  <th>City</th>
                  <th>Fees</th>

                </tr>
                {ans}
         </table>
    </>
  )
}
export default App;
*/

// =========================================================================

const App=()=>{
  return(
    <>
       {/* <h1 style={{color:"yellow" , fontFamily:"verdana"}}>Welcome to cybrome classes</h1>
       <h1 style={{color:"pink" , fontFamily:"verdana" , fontSize:"50px"}}>Welcome to cybrome classes</h1> */}

       <div style={{backgroundColor:"red", borderRadius:"20px" , width:"200px", height:"200px" }} >

             <div style={{backgroundColor:"green" ,borderRadius:"20px" , width:"150px" , height:"150px", position:"relative", top:"20px", left:"20px",}}>

                     <div style={{backgroundColor:"blue" ,borderRadius:"20px" , width:"100px",height:"100px", margin:"10px",position:"relative", top:"20px", left:"20px" }}>

                      <div style={{position:"relative" ,top:"40px" ,left:"20px", fontSize:"20px"}}>Cybrom</div>
                      
                      </div>
             </div>
       </div>
       

    </>
  )
}
export default App;