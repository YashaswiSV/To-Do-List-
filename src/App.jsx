// ======================================18july======================================================


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Aboutnew from "./Aboutnew";
import Homwnew from "./Homenew";
import Contactnew from "./Contactnew";

const App=()=>{
  return(
    <>
       <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout/>}>
                   <Route index element={<Homwnew/>}/>
                   <Route path="/homenew" element={<Homwnew/>}/>
                   <Route path="/aboutnew" element={<Aboutnew/>}/>
                   <Route path="/contactnew" element={<Contactnew/>}/>
            
                  </Route>
              </Routes>
             
       </BrowserRouter>
    </>
  )
}
export default App;



