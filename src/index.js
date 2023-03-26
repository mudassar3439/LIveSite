import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import Spinner from './Spiner';
import App from './App';


ReactDOM.render(
<>
<BrowserRouter>
   {/* <Spinner/> */}
   <App/>
</BrowserRouter>
</>
,document.getElementById("root"));

