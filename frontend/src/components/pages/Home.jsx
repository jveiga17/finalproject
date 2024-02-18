import React, { useState, useEffect } from 'react';
import Navbar from '../scripts/Navbar';
import styles from '../../css/Home.module.css';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (2 seconds) for demonstration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);

  return (
    <body>
      <Navbar />
      <div className={`${styles.loading} ${isLoading ? '' : styles.hide}`}>
        <div className={styles.spinner}></div>
      </div>
      <header className={styles.header}>
        <img className={styles.image} src="/images/landing.png" alt="" />
        <h1 className={styles.h1Intro}>Introducing <h1 className={styles.logo}>b.better</h1><h2>Revolutionising Education for All!</h2></h1>
      </header>
      <section className={`main-content ${isLoading ? styles.hide : ''}`}>
        <p>Our platform is more than just a collection of courses; it's a catalyst for change, a force for good in the world. We envision a future where education transcends borders, where every mind is nurtured, and every voice is heard.</p>
        <p>Join us on this journey as we strive to change the world, one learner at a time. Together, let's build a brighter future where education knows no limits.</p>
        <div>
          <h2>Welcome to <h1 className={styles.logo}>b.better</h1>—where learning knows freedom.</h2>
        </div>
      </section>
      <footer className={styles.footer}>
        <h1 className={styles.bBetterFooter}>b.better</h1>
        <ul className={styles.socialIcons}>
          <li><i className="fa-brands fa-facebook-f"></i></li>
          <li><i className="fa-brands fa-instagram"></i></li> 
          <li><i className="fa-brands fa-x-twitter"></i></li>
          <li><i className="fa-brands fa-tiktok"></i></li>
        </ul>
        <div className={styles.textEnd}>
          © 2024 Joao Veiga
        </div>
      </footer>
    </body>
  );
}

export default Home;
