

//=========================================1 July======================================================

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from "./Service";
import CompanyService from "./CompanyServices";
import ProductService from "./ProductService";
import SellsService from "./SellsService";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NoPage from "./NoPage";

const  App=()=>{
  return(
    <>
    <BrowserRouter>
         <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="*" element={<NoPage/>}/>

           <Route path="service" element={<Service/>}>
                 <Route path="companyservice" element={<CompanyService/>}/> 
                 <Route path="productservice" element={<ProductService/>}/> 
                 <Route path="sellsservice" element={<SellsService/>}/> 

           </Route>

           </Route>
         </Routes>
    
    </BrowserRouter>
    </>
  )
}
export default App;

