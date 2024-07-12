import axios from "axios";
import { useState } from "react";
import Table from 'react-bootstrap/Table';

const Search=()=>{

    const [rno , setrno]=useState("");
    const[mydata , setmydata]=useState([]);

    const handlesearch=()=>{
        let url=`http://localhost:3000/student/?Rollno=${rno}`
        axios.get(url).then((res)=>{
            setmydata(res.data)
        })

    }
    let ans=mydata.map((key)=>{
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
    })
    return(
        <>
           <input type="text" value={rno} onChange={(e)=>{setrno(e.target.value)}}/>
          <button onClick={handlesearch}>search</button>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Rollno</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>
         {ans}
      </tbody>
      </Table>
        
        </>
    )

}
export default Search;