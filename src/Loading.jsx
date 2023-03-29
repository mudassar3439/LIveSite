import React from 'react'
import Timer from './Timer';

const Loading = () => {
  return (<>

<h1 style={{display:'inline-flex',fontSize:"35px"}}>Loading</h1>
<div className="spinner-grow spinner-grow-sm" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow spinner-grow-sm" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow spinner-grow-sm" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<h1 className='text-danger' style={{display:'inline-flex',fontSize:"40px" ,marginLeft:'5px'}}><Timer/></h1>
  </>);
}

export default Loading;