
import { useNavigate } from "react-router-dom";


const Contactnew=()=>{

    const navigate=useNavigate();
    setTimeout(()=>{
        navigate("/homenew")
    },5000)
    return (
        <>
           <h1>Welocme to contact page</h1>
          
      
        </>
    )
}
export default Contactnew;