import React from "react";
import web from '../src/images/img2.png'
import Common from "./Common";

const About=()=>{
   return(
    <> 
   <Common name="Welcome To About Page" 
    imgsrc={web} 
    visit="/contact"
    btname="Contect"  
    />
    </>
   )
 
}
export default About;