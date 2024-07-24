import { createContext,useState } from "react";

const myloginContext=createContext();

const LoginContext = ({children}) => {
    const [user , setuser]=useState({name:"",auth:false})

    const login=(nm)=>{
        setuser({name:nm , auth:true})
    }

    const logout=()=>{
        setuser({name:"",auth:false})
    }

    return ( 
        <>
                  <myloginContext.Provider value={{user , login , logout}}>
                     {children}
                  </myloginContext.Provider>
            
        </>
     );
}
 
export default LoginContext;
export {myloginContext};