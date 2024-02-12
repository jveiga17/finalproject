import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };


    const [isScrolled, setIsScrolled] = useState(false);

  // function to handle scroll event
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-brand">
        <Link to="/">b.better</Link>
        </div>
        <div className="nav-link">
        <div className="dropdown" onClick={toggleDropdown}>
            <button className="dropbtn">Courses</button>
            <div className="dropdown-content">
            <Link to="/brazil">Racism in Brazil</Link>
            <Link to="/antisemitism">Antisemitism</Link>
            <Link to="/covid">COVID-19</Link>
            </div>
        </div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        </div>
    </nav>
    );
    };

export default Navbar;
