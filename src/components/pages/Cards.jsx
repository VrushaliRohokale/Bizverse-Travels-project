import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import img1 from '../images/travelling img1.jpg';
import img2 from '../images/hotels img.jpg';
import img3 from '../images/resort img.jpg';
import img4 from '../images/villa img.jpg';
import img5 from '../images/insurance img.jpg';
import img6 from '../images/cabs img.webp';

const Cards = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = (cardTitle) => {
    // Navigate to the specific page based on the card title
    switch (cardTitle) {
      case "Travelling Information":
        navigate("/cardinfo"); // Adjust the route as needed
        break;
      case "Hotel Information":
        navigate("/cardinfo");
        break;
      case "Resort Information":
        navigate("/cardinfo");
        break;
      case "Villa Stay Information":
        navigate("/cardinfo");
        break;
      case "Insurance Information":
        navigate("/cardinfo");
        break;
      case "Cabs Information":
        navigate("/cardinfo");
        break;
      default:
        console.log("No matching page for this service");
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* Travelling Information */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img src={img1} className="card-img-top" alt="Travelling" />
            <div className="card-body">
              <h5 className="card-title">Travelling Information</h5>
              <p className="card-text">
                Get details about the best travel options, including flights, trains, and buses for your journey.
              </p>
              <button className="btn btn-primary" onClick={() => handleClick("Travelling Information")}>
                Click Me
              </button>
            </div>
          </div>
        </div>

        {/* Hotel Information */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img src={img2} className="card-img-top" alt="Hotel" />
            <div className="card-body">
              <h5 className="card-title">Hotel Information</h5>
              <p className="card-text">
                Discover top-rated hotels and accommodations that suit your needs and preferences.
              </p>
              <button className="btn btn-primary" onClick={() => handleClick("Hotel Information")}>
                Click Me
              </button>
            </div>
          </div>
        </div>

        {/* Resort Information */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img src={img3} className="card-img-top" alt="Resort" />
            <div className="card-body">
              <h5 className="card-title">Resort Information</h5>
              <p className="card-text">
                Learn about luxurious resorts offering world-class amenities for a perfect getaway of resort.
              </p>
              <button className="btn btn-primary" onClick={() => handleClick("Resort Information")}>
                Click Me
              </button>
            </div>
          </div>
        </div>

        {/* Villa Stay Information */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img src={img4} className="card-img-top" alt="Villa" />
            <div className="card-body">
              <h5 className="card-title">Villa Stay Information</h5>
              <p className="card-text">
                Experience a private and luxurious stay with stunning villas in beautiful locations.
              </p>
              <button className="btn btn-primary" onClick={() => handleClick("Villa Stay Information")}>
                Click Me
              </button>
            </div>
          </div>
        </div>

        {/* Insurance Information */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img src={img5} className="card-img-top" alt="Insurance" />
            <div className="card-body">
              <h5 className="card-title">Insurance Information</h5>
              <p className="card-text">
                Stay protected during your travels with comprehensive insurance plans.
              </p>
              <button className="btn btn-primary" onClick={() => handleClick("Insurance Information")}>
                Click Me
              </button>
            </div>
          </div>
        </div>

        {/* Cabs Information */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img src={img6} className="card-img-top" alt="Cabs" />
            <div className="card-body">
              <h5 className="card-title">Cabs Information</h5>
              <p className="card-text">
                Find reliable cab services to make your travel comfortable and hassle-free.
              </p>
              <button className="btn btn-primary" onClick={() => handleClick("Cabs Information")}>
                Click Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
