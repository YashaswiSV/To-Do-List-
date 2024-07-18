// ========================================18 july==============================

import { Outlet,Link } from "react-router-dom";

const Layout=()=>{
  return(
    <>
       <Link to={"homenew"}>Home | </Link>
       <Link to={"aboutnew"}>about | </Link>
       <Link to={"contactnew"}>contact</Link>
            
            <hr size="6" color="red"/>
            <Outlet/>
            <hr size="6" color="red"/>


    </>
  )
}
export default Layout;

