import React from "react";
import Card from "./Card";
import Heading from "./Heading";
import Sdata from "./Sdata";

const Service=()=>{
return(
    <>
    <div className="my-5">
    <div className="text-center"><Heading h1='Our Services'/></div>
   </div>
<div className="container-fluid mb-5 "id="header">
  <div className="row">
    <div className="col-10 mx-auto">
      <div className="row gy-3 mb-3">
          {
            Sdata.map((val, ind) => {
              return(<Card key={ind} imgsrc={val.imgsrc} title={val.title} para={val.para} />)
              
            })
          }
        

      </div>
    </div>
  </div>
</div>
    </>
)
 
}
export default Service;