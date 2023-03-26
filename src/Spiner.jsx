import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Loading from './Loading';
import App from './App';

const Spinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loading effect
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className='container-fluid ' style={{ height: '100vh' }}>
      <div className='row justify-content-center align-items-center h-100'>
        <div className='col-12 text-center'>
          {loading ? (
            <Loading />
          ) : (
            <div>
              <App />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Spinner;