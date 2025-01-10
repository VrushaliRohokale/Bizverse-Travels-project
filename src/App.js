import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/pages/Home";
import About from './components/pages/About';
import Services from './components/pages/Services';
import BuyDomain from './components/pages/BuyDomain';
import Login from "./components/pages/Login";
import ForgotPassword from "./components/pages/ForgotPassword";
import Register from "./components/pages/Register";
import Cards from "./components/pages/Cards";
import Cardinfo from "./components/pages/Cardinfo";
import 'primereact/resources/themes/saga-blue/theme.css';  // PrimeReact theme
import 'primereact/resources/primereact.min.css';         // PrimeReact core CSS
import 'primeicons/primeicons.css';                      // PrimeIcons
import Booking from "./components/pages/Booking";
import BookingTable from "./components/pages/BookingTable";
import Chart from "./components/pages/Chart";
import Paichart from "./components/pages/Paichart";






function App() {
  return (
    <Router>
       <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Buydomain" element={<BuyDomain />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cardinfo" element={<Cardinfo/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/bookingtable" element={<BookingTable/>}/>
        <Route path="/chart" element={<Chart/>}/>
        <Route path="/paichart" element={<Paichart/>}/>
        
        

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
