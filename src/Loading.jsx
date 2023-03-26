import React from 'react';

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

  </>);
}

export default Loading;