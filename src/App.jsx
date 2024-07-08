// import { useState, useEffect } from "react";
// import axios from "axios";
// import Table from 'react-bootstrap/Table';

// const App=()=>{
//   const [mydata , setMydata]=useState([]);
//   const loadData=()=>{
//      let url="https://jsonplaceholder.typicode.com/todos";
//       axios.get(url).then((res)=>{
//         setMydata(res.data)
//         console.log(res.data);
//       })
//   }
//   useEffect(()=>{0
//     loadData();
//   },[])

//   let status="";

//   const ans = mydata.map((key)=>{
//     if(key.completed ==true){
//       status="TRUE";
//     }
//     else{
//       status="FALSE";
//     }
 
//    return(
//     <>
//       <tr>
//         <td>{key.userId}</td>
//         <td>{key.id}</td>
//         <td>{key.title}</td>
//         <td>{status}</td>
//       </tr>
    
//     </>
//      )
//      })

//      return(
//       <>
//       <h1 style={{textAlign:"center"}}>Welcome</h1>

//       <Table striped bordered hover style={{width:'50rem' ,margin:"auto"}}>
//       <thead>
//         <tr>
//          <th>USER ID</th>
//          <th> ID</th>
//          <th>TITLE</th>
//          <th>COMPLETED</th>
//          </tr>
//          </thead>
//          <tbody>
//          {ans}
//          </tbody>
         
        
//        </Table>
      
//       </>
//      )
  
// }
// export default App;

// =====================================================================
import { useState,useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

const App=()=>{
  const[mydata ,setMydata]=useState([]);
  const loadData=()=>{
    let api=" http://localhost:3000/student";
    axios.get(api).then((res)=>{
      console.log(res.data);
      setMydata(res.data);
    });
  
  }

 const ans=mydata.map((key)=>{
           return(
            <>
               <tr>
                <td>{key.Rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
               </tr>
            
            </>
           )
 });

 useEffect(()=>{
    loadData();
 },[])


  return(
    <>
        <h1>Table </h1>
        <Table striped bordered hover style={{width:'50rem' ,margin:"auto"}}>
      <thead>
        <tr>
        <th>USER ID</th>
        <th> ID</th>
          <th>TITLE</th>
          <th>COMPLETED</th>
          </tr>
          </thead>
          <tbody>
         {ans}
         </tbody>
         
        
        </Table>

    </>
  )
}
export default App;