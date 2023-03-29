import React from "react";
// import F1 from './F1';
import web from '../src/images/img2.png'
import Common from "./Common";

const About=()=>{
   return(
    <> 
   <Common name="Welcome To About Page" 
    imgsrc={web} 
    visit="/contact"
    btname="Contact"  
    />
    </>
   )
 
}
export default About;