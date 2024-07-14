import { useState,useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import edimg from "../iconmg/edi.png";
import delimg from "../iconmg/dele.png";

const UpdateNew=()=>{

       const[mydata , setMydata]=useState([]);
       const[editData , setEditData]=useState({});

       const loadData=()=>{

         let url="http://localhost:3000/student";
         axios.get(url).then((res)=>{
            setMydata(res.data)
         })
       }
        
       useEffect(()=>{
        loadData();
       },[])

       const myDel=(myid)=>{
        let url=`http://localhost:3000/student/${myid}`

        axios.delete(url).then(()=>{
            alert("Record successfully deleted!!!!!!");
            loadData();

        })
       }
       const myEdit=(myid)=>{
        let url=`http://localhost:3000/student/${myid}`
        axios.get(url).then((res)=>{
            setEditData(res.data)
            console.log(res.data);
        })
       }

       const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setEditData(values=>({...values,[name]:value}));
       }

       const handleSubmit=()=>{
        
        let url=`http://localhost:3000/student/${editData.id}`;
        axios.put(url,editData).then(()=>{
            alert("record successfully update!!");
            loadData();
        })
         
       }

       const ans=mydata.map((key)=>{
           return(
            <>
                <tr>
                    <td>{key.Rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.fees}</td>

                    <td>
                        <a href="#">
                            <img src={edimg} width="30" height="30" alt=""  onClick={()=>{myEdit(key.id)}}/>
                        </a>

                        <a href="#">
                            <img src={delimg} width="30" height="30" alt=""  onClick={()=>{myDel(key.id)}}/>
                        </a>
                    </td>

                </tr>
            
            </>
           )
       })

    return(
        <>
           <h1>Update student</h1>
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

      <br/>

      <input type="hidden" name="recid" value={editData.id}/>
      Edit Rollno<input type="text" name="Rollno" value={editData.Rollno} onChange={handleInput}/>
      <br />
      Edit Name<input type="text" name="name" value={editData.name} onChange={handleInput}/>
      <br />
      Edit City<input type="text" name="city" value={editData.city} onChange={handleInput}/>
      <br />
      Edit Fees<input type="text" name="fees" value={editData.fees} onChange={handleInput}/>
      <br />
      <button onClick={handleSubmit}>update save</button>




        </>
    )
}
export default UpdateNew;
