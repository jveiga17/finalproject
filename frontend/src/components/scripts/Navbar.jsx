import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/Navbar.module.css'; // css imports
import stylesBrazil from '../../css/NavbarBrazil.module.css'; 
import stylesCovid from '../../css/NavbarCovid.module.css'

const Navbar = ({ page }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const [isScrolled, setIsScrolled] = useState(false);

    // Function to handle scroll event
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    // Scroll event listener when component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Remove event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Determine which CSS module to use based on the page prop
    let navbarStyles = styles; // Default styles by default

    // Override styles for Brazil page
    if (page === 'brazil') {
        navbarStyles = stylesBrazil;
    }

    // Override styles for Covid page
    if (page === 'covid') {
        navbarStyles = stylesCovid;
    }

    return (
        <nav className={`${navbarStyles.navbar} ${isScrolled ? navbarStyles.scrolled : ''}`}>
            <div className={navbarStyles.navbarBrand}>
                <Link to="/">b.better</Link>
            </div>
            <div className={navbarStyles.navLink}>
                <div className={navbarStyles.dropdown} onClick={toggleDropdown}>
                    <button className={navbarStyles.dropbtn}>Courses</button>
                    <div className={navbarStyles.dropdownContent}>
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
