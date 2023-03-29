import React from "react";
import Heading from './Heading';
import { NavLink } from 'react-router-dom';


const Common=(props)=>{
   return(
    <> 
    <section id="header" className="d-flex ">
    <div className="container-fluid mb-5">
      <div className="row">
      <div className="col-10 mx-auto">
      <div className="row">
      <div className="col-md-6 mb-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column  ">
        <h1>{props.name}<div><strong ><Heading h1='Live Site'/></strong></div></h1>
        <h2 className="my-3">
          We are hare to increase your shopping lavel
        </h2>
        <div className="mt-3 text-center">
         <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
        </div>
      </div>
       <div className="col-lg-6 order-1 order-lg-2 ">
         <img src={props.imgsrc} className="img-fluid animated " alt='Img'/>
       </div>
       </div>
      </div>
    </div>
    </div>
    </section>
    </>
   )
 
}
export default Common;