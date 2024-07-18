import { useNavigate } from "react-router-dom";

const Aboutnew=()=>{
    const navigate=useNavigate();
   const myfun=()=>{
        navigate("/homenew")
    }
    return (
        <>
           <h1>Welocme to About page</h1>
           <button onClick={myfun}>click here</button>
        </>
    )
}
export default Aboutnew;