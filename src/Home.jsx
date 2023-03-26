import React from "react"
import Common from "./Common"
import web from '../src/images/img1.png'

const Home=()=>{
   return(
    <> 
    <Common name="Grow your Shopping with" 
    imgsrc={web} 
    visit="/service"
    btname="Get Startted"  
    />

    </>
   )
 
}
export default Home;