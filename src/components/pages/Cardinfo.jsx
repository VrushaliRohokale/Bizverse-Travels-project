import React, { useState } from "react";
import img1 from '../images/travelling img1.jpg'
import img2 from '../images/hotels img.jpg'
import img3 from '../images/resort img.jpg'
import img4 from '../images/villa img.jpg'
import img5 from '../images/insurance img.jpg'
import img6 from '../images/cabs img.webp'

function Cardinfo() {
  const [selectedService, setSelectedService] = useState("");
  const [error, setError] = useState("");

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setError("");
  };

  const handleSubmit = () => {
    if (!selectedService) {
      setError("Please select a service before proceeding.");
    } else {
      alert(`You selected: ${selectedService}`);
    }
  };

  const services = [
    {
      title: "Travelling Information",
      description:
        "Traveling is the heart of every journey, and our service ensures a smooth experience from start to finish. " +
        "Get access to detailed information about flights, trains, buses, and other modes of transportation. Discover " +
        "routes, schedules, and affordable options to suit your preferences. Whether planning a solo adventure, a family " +
        "trip, or a business tour, you’ll find tailored travel solutions. We also provide tips on managing travel documents, " +
        "packing essentials, and exploring destinations stress-free.",
      image: img1,
    },
    {
      title: "Hotel Information",
      description:
        "Hotels are more than just accommodations—they're your home away from home. Our service connects you to a variety of hotels, " +
        "from budget-friendly stays to luxury suites. Enjoy amenities such as complimentary breakfast, room service, Wi-Fi, and more. " +
        "With user reviews and ratings, you can make informed decisions for a comfortable stay. Whether you’re looking for a place " +
        "in the city center or near scenic locations, our recommendations suit every traveler’s needs.",
      image: img2,
    },
    {
      title: "Resort Information",
      description:
        "Resorts offer a blend of relaxation and luxury, perfect for a rejuvenating vacation. Surrounded by natural beauty, our selected " +
        "resorts come with world-class amenities like infinity pools, spas, and fine dining experiences. Ideal for family vacations, " +
        "honeymoons, or wellness retreats, these serene getaways promise unforgettable moments. Indulge in activities like yoga, snorkeling, or " +
        "guided nature walks as you relax in style.",
      image: img3,
    },
    {
      title: "Villa Stay Information",
      description:
        "For travelers seeking exclusivity and privacy, villas provide a perfect haven. Experience the comfort of a private home with luxury " +
        "amenities, spacious rooms, and personal pools. Villas are ideal for families, groups, or couples who want peace and a personalized " +
        "stay. Located in prime areas close to key attractions, these stays offer a balance of tranquility and convenience.",
      image: img4,
    },
    {
      title: "Insurance Information",
      description:
        "Travel insurance is your safety net for the unexpected. Whether it's trip cancellations, medical emergencies, or lost luggage, our " +
        "comprehensive plans have you covered. Choose from a range of affordable policies designed to protect your journey and give you peace of mind. " +
        "With 24/7 assistance and hassle-free claims, you can focus on making memories without worrying about risks.",
      image: img5,
    },
    {
      title: "Cabs Information",
      description:
        "Navigate your destination effortlessly with reliable cab services. Book comfortable rides for local commutes, intercity travel, or airport " +
        "transfers. Choose from economy to luxury cars to suit your budget and preferences. With professional drivers ensuring safety and punctuality, " +
        "you can sit back and relax while traveling. Our service ensures convenience with doorstep pickup and competitive pricing.",
      image: img6,
    },
  ];

  return (
    <>
      <style>
        {`
          .service-container {
            margin-bottom: 40px;
          }
          .service-container img {
            max-width: 100%;
            border-radius: 10px;
          }
          .service-info {
            display: flex;
            align-items: center;
          }
          .service-info img {
            max-width: 100%;
            height: auto;
          }
          .service-description {
            padding: 20px;
          }
          .service-description h5 {
            font-weight: bold;
          }
          .service-container:nth-child(odd) .service-info {
            flex-direction: row;
          }
          .service-container:nth-child(even) .service-info {
            flex-direction: row-reverse;
          }
        `}
      </style>

      <div className="container mt-5 mb-5">
        <h1 className="text-center mb-4">Services</h1>
        {services.map((service, index) => (
          <div
            className="service-container"
            key={index}
            onClick={() => handleServiceClick(service.title)}
            style={{ cursor: "pointer" }}
          >
            <div className="service-info row">
              <div className="col-md-6">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="col-md-6 service-description">
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
        {error && <div className="text-danger mt-3">{error}</div>}
        <div className="text-center">
          <button className="btn btn-primary mt-4" onClick={handleSubmit}>
            Submit Your Selection
          </button>
        </div>
      </div>
    </>
  );
}

export default Cardinfo;
