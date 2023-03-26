
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Loading from './Loading';
// import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AnimatedParagraph from './AnimatedParagraph'

const LiveSite = () =>{
const navigate=useNavigate();
const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
    
    <section id="header" className="d-flex align-items-center">
    <div className="container-fluid nav-bg">
      <div className="row">
      <div className="col-10 mx-auto">
      
      <div className='col-12 text-center'>
      <h1><AnimatedParagraph text="Welcome To Live-Site "/></h1>
          {loading ? (
            <Loading />
          ) : (
            <div>
        <button style={{width:"200px"}} className="btn btn-lg btn-primary mt-5"
             onClick={()=>navigate('/')}>Start</button>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
    </section>
    </>
  );
}

export default LiveSite;
