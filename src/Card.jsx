import React from "react";
import { NavLink } from "react-router-dom";



const Card=(props)=>{
return(
    <>
    

        <div className="col-md-4 col-10 mx-auto">
          <div className="card" >
             <img src={props.imgsrc} className="card-img-top img img-fluid  header-img" alt="..."/>
              <div className="card-body">
                <h4 className="card-title text-center">{props.title}</h4>
                <p className="card-text">{props.para}</p>
                <NavLink to='/' className="btn btn-primary">Cheack</NavLink>
              </div>
          </div>
        </div>
                
       
    </>
)
 
}
export default Card;