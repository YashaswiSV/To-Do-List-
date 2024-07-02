import { Link,Outlet } from "react-router-dom";

const Service=()=>{
    return(
        <>
        
             <h1>Our Company Services</h1>
             <table>
                    <tr>
                         <td width="50%" height="200" mar>
                            <Link to="companyservice">Company Service</Link>
                              <br /><br />
                              <Link to="productservice">Product Service</Link>
                              <br /><br />
                              <Link to="sellsservice">Sells Service</Link>
                         </td>

                          <td className="my-4">
                            <Outlet/>
                          </td>
                    </tr>



             </table>
        </>
    )
}
export default Service;