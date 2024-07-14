import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useState,useEffect } from 'react';

const Update=()=>{

    const [mydata , setmydata]=useState([]);

    const loadData=()=>{

      let url="http://localhost:3000/student"
      axios.get(url).then((res)=>{
        setmydata(res.data)
          
      })
    }
    useEffect(()=>{
        loadData()
    },[])


    const mydel=(myid)=>{
        let url=`http://localhost:3000/student/${myid}`
        axios.delete(url).then((res)=>{
            alert("Deleted")
            loadData()
        })
    }
    let ans = mydata.map((key)=>{
        return(
            <tr>
                <td>{key.Rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
                <td><button onClick={()=>{mydel(key.id)}}>delete</button></td>
            </tr>
        )
    })

    return(
        <>

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
export default Update;