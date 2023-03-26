import React from "react";
import { useNavigate } from "react-router-dom";
const Error=()=>{
  const navigate=useNavigate();
    return(
        <> 
        <div className="container-fluid mb-5 "id="header">
  <div className="row">
    <div className="col-10 mx-auto">
       
            <div className="text-center" style={{marginTop:"180px"}}>
            <h1 style={{fontSize:"80px"}}> OPPS! 404 Page not found 😢</h1>
            <button style={{width:"200px"}} className="btn btn-lg btn-primary mt-5" onClick={()=>navigate('/')}>Goto Home</button>
           </div>
    </div>
  </div>
  </div>
          
        </>
       )
 
}
export default Error;