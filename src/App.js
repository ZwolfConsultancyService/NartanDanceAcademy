import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HeroSec from './pages/HeroSec';
import About from './pages/About';
import InquiryForm from './components/InquiryForm';
import Card from './pages/Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Courses from './pages/Courses';
import DanceInstructor from './pages/DanceInstructor';
import Review from './pages/Review';
import Footer from './components/Footer';
import Floatingbtn from './components/FloatingBtn';
import TnC from './pages/TnC';
import PrivacyP from './pages/PrivacyP';
import Refund from './pages/Refund';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import Fitness from './pages/Fitness';
import Gallery from './pages/Gallery';
import YouTube from './pages/YouTube';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <>
      {showForm && <InquiryForm onClose={closeForm} />}
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSec />
                <About />
                <Courses />
                <Card />
                <Fitness/>
                <Gallery/>
                <DanceInstructor />
                <YouTube/>
                <Review />
              </>
            }
          />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/dance-course" element={<Courses />} />
          <Route path='/our-gallery' element={<Gallery/>} />
          <Route path="/terms-conditions" element={<TnC />} />
          <Route path="/privacy-policy" element={<PrivacyP />} />
          <Route path="/refund-policy" element={<Refund />} />
        </Routes>
        <Floatingbtn/>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
