import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';


const Insert=()=>{

   const [input ,setinput]=useState({});

   const handlechange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setinput(values=>({...values,[name]:value} ))
   }

   const handleclick=(e)=>{
    e.preventDefault();
    let url='http://localhost:3000/student';
    axios.post(url,input).then((res)=>{
        alert("successful posted")
        setinput("");

    }).catch((err)=>{
         console.log("error" ,err);
    })
   }

    return(
        <>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Rollno</Form.Label>
          <Form.Control type="text"  name="Rollno" value={input.Rollno} placeholder="Enter Rollno"  onChange={handlechange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" name="name" value={input.name}  placeholder="Enter Name"  onChange={handlechange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>City</Form.Label>
      <Form.Control type="text" name="city" value={input.city}  placeholder="Enter City" onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Fees</Form.Label>
      <Form.Control type="text" name="fees" value={input.fees}  placeholder="Enter Fees" onChange={handlechange}/>
      </Form.Group>

 
      <Button variant="primary" type="submit" onClick={handleclick}>
        Submit
      </Button>
      </Form> 
        
        </>
    )

}
export default Insert;








