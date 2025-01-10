import React from 'react';
import softwareImage from '../images/desktop-wallpaper-travel-theme-designs-for-travel-travel-agency.jpg';
import Cards from './Cards';
import Chart from './Chart';
import Paichart from './Paichart';

function Home() {
  
  const containerStyle = {
    backgroundColor: 'rgba(100, 100, 100, 0.1)', 
    minHeight: '100vh'
  };

  return (
    <>
    <div className="container-fluid p-0" style={containerStyle}>
      <div
        className="d-flex justify-content-center align-items-center bg-dark text-white"
        style={{
          height: "100vh",
          backgroundImage: `url(${softwareImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div
          className="text-center p-4"
          style={{ background: "rgba(0, 0, 0, 0.5)", borderRadius: "10px" }}
        >
          <h1>Welcome to Bizverse Travelling Company</h1>
          <p>Easy to travel from one place to another.</p>
        </div>
      </div>
      <div id="cards" className="container my-2 pt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="p-3 bg-white shadow-xl border-x-8 rounded-3xl">
              <Chart />
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 bg-white shadow-xl border-x-8 rounded-3xl">
              <Paichart />
            </div>
          </div>
        </div>
        
        <Cards />
        
      </div>

    </div>
    <div>
     
    </div>
    </>
  );
}

export default Home;
