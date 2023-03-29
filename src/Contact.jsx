
import  {useState,React} from 'react';
import Heading from './Heading';
import AnimatedParagraph from './AnimatedParagraph'

const Contact = () => {
  const [show,setshow]=useState()
  const [submittedData, setSubmittedData] = useState(null);
  const [ddata,setddat]=useState()
  const [data,setdata]=useState({
    fullname:'',
    phone:"",
    email:"",
    message:""
  })

  const Showdata=()=>{
    setshow(!show)
  }
  const Click=()=>{
    Showdata();
    ForSubmit();
  }
  const ForSubmit = (event) => {
    // event.preventDefault();
    setSubmittedData(data);
  }
  
  const InputEvent=(event)=>{
   const {name,value} =event.target;
   setdata((preval)=>{
     return{
      ...preval,
      [name]:value,
     }
   })
  }
 
return (
<>
      <div className="mt-3 text-center">
       <Heading h1='Contact-US'/>
      </div>

<div className="container "id='header'>
  <div className="row">
    <div className="col-md-6 col-10 mx-auto">
      <form onSubmit={ForSubmit}>

        <div className="mb-3 text-left">
          <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"
              name="fullname"
              value={data.fullname}
              onChange={InputEvent}
                />   
        </div>

        <div className="mb-3 text-left">
          <label htmlFor="exampleFormControlInput2" className="form-label">Phone</label>
          <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Enter Your Number"
                name="phone"
                value={data.phone}
                onChange={InputEvent}
                />
        </div>

        <div className="mb-3 text-left">
            <label htmlFor="exampleFormControlInput3" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="Enter your E-mail"
                name="email"
                value={data.email}
                onChange={InputEvent}
                />
        </div>

        <div className="mb-3 text-left">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type here Your Message"
                name="message"
                value={data.message}
                onChange={InputEvent}></textarea>
        </div>

           <button onClick={Click} className="btn btn-outline-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" >Submit</button>
        
      </form>
            
            {/* -----------------------------------------------------------Offcanvas ----------------------------------------------------------------*/}
  <div style={{ width: '90vh'}} className="offcanvas bg offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

      <div className="offcanvas-header">
      <div className="offcanvas-title" id="offcanvasExampleLabel"><Heading h4='Confirmation'/></div>
      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
      <div className="offcanvas-body">
        <div className='text-center'>
        {show&&(<h3 style={{color:"orange"}}><AnimatedParagraph text="Please Confirm You Enter Same Data"/></h3>)}
      </div>

        <div className='text-left'>
          <h2>Name:   <span className='text-danger font-size'> {submittedData?.fullname}</span></h2>
          <h2>Phone:  <span className='text-primary font-size'> {submittedData?.phone}</span></h2>
          <h2>E-mail: <span  className='text-danger font-size' > {submittedData?.email}</span></h2>
          <h2>Message:<span className='text-primary font-size'> {submittedData?.message}</span></h2>
        </div>

        <form>      
            <div className="text-center">
              <button type="button" className="btn btn-primary" onClick={() => { alert("Your Data Submitted Successfully")}}>Confirm</button>
            </div>
        </form>
      <div className='text-center mt-2'>
          <button className='btn btn-outline-warning ' onClick={()=>{setddat(!ddata)}}>About Developer</button>
      </div>
      {ddata &&(
        <>
          <div>
          <h2>Name:    <span className='text-danger font-size'>Mudassar Mobeen</span></h2>
          <h2>Edu:<span className='text-primary font-size'> BS Software Engineering </span></h2>
          <h2>Dasignation: <span  className='text-danger font-size'>Front-End Developer</span></h2>
          </div>
        </>
      )}

      </div>
  </div>

    </div>
  </div>
</div>
</>
  )}

export default Contact;
