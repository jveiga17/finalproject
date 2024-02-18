import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/NavbarUser.module.css'; // css imports
import stylesBrazil from '../../css/NavbarBrazil.module.css'; 
import stylesCovid from '../../css/NavbarCovid.module.css'
import { useDispatch } from 'react-redux';

const NavbarUser = ({ page }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dispatch = useDispatch();

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
    if (page === 'brazil-courses') {
        navbarStyles = stylesBrazil;
    }

    // Override styles for Covid page
    if (page === 'covid-courses') {
        navbarStyles = stylesCovid;
    }

    return (
        <nav className={`${navbarStyles.navbar} ${isScrolled ? navbarStyles.scrolled : ''}`}>
            <div className={navbarStyles.navbarBrand}>
                <h1>b.better</h1>
            </div>
            <div className={navbarStyles.navLink}>
                <div className={navbarStyles.dropdown} onClick={toggleDropdown}>
                    <button className={navbarStyles.dropbtn}>Courses</button>
                    <div className={navbarStyles.dropdownContent}>
                        <Link to="/brazil-courses">Racism in Brazil</Link>
                        <Link to="/antisemitism-courses">Antisemitism</Link>
                        <Link to="/covid-courses">COVID-19</Link>
                    </div>
                </div>
                <Link to="/" onClick={() => {
                    dispatch({
                        type: 'LOGOUT_SUCCESS'
                    })
                }}>Logout</Link>
            </div>
        </nav>
    );
};

export default NavbarUser;
