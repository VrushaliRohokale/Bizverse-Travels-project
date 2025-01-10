import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../images/travelling img1.jpg';
import img2 from '../images/hotels img.jpg';
import img3 from '../images/resort img.jpg';
import img4 from '../images/villa img.jpg';
import img5 from '../images/insurance img.jpg';
import img6 from '../images/cabs img.webp';

const Booking = () => {
  const navigate = useNavigate();

  const items = [
    {
      title: "Traveling",
      image: img1,
      details: "Explore exciting travel destinations with personalized packages.",
    },
    {
      title: "Hotels",
      image: img2,
      details: "Book luxurious and budget-friendly hotels worldwide.",
    },
    {
      title: "Resort",
      image: img3,
      details: "Relax and rejuvenate at premium resorts across scenic locations.",
    },
    {
      title: "Villa Stay",
      image: img4,
      details: "Experience the comfort of private villas for your next getaway.",
    },
    {
      title: "Insurance",
      image: img5,
      details: "Secure your trips with comprehensive travel insurance plans.",
    },
    {
      title: "Cabs",
      image: img6,
      details: "Convenient cab services for seamless travel experiences.",
    },
  ];

  const handleBookingClick = () => {
    navigate('/bookingtable'); // Update with the correct route for BookingTable
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Booking Options</h1>
      <div className="row">
        {items.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                style={{ height: "150px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.details}</p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={handleBookingClick}
                >
                  Process to Booking
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;
