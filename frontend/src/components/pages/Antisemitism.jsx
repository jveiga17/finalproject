import React from 'react';
import Navbar from '../scripts/Navbar'; // import components
import MyCarousel from '../scripts/Carousel'; 
import styles from '../../css/Antisemitism.module.css'; 

const Antisemitism = () => {
    return (
        <div>
          <header>
            {/* Navbar */}
            <Navbar />
            <h1 className={styles.h1Intro}>Unfortunately, it never <em>really</em> passed...</h1>
            <h3 className={styles.h3Intro}>Antisemitism has been a social phenomenon for many years, it being responsible for despicable atrocities and fomenting prejudice and persecution of the Jewish people,
            based solely on hate towards their ethinicity</h3>
            {/* Carousel */}
            <MyCarousel />
          </header>
          <section className={styles.infoBbetter}>
            <h1>... but there is <strong>always</strong> hope!</h1>
            <div className={styles.h2InfoDiv}>
              <h2>We at </h2><h2 className={styles.bBetterInfo}>b.better</h2><h2> believe in education!</h2>
            </div>
            <h3>No matter the issue, we are strong believers that through education we can move mountains, <br /> part seas and cross the deserts that separate us from each other.</h3>
            <img src="../images/img-sec-info.jpg" alt="" />
            <h3 className={styles.h3Info}>Below are our special courses regarding the history of Israel and its people, <br /> encompassing all the major and minor events of the Jewish people's timeline</h3>
          </section>
          <h1 className={styles.h1Courses}>Our Courses on Antisemitism</h1>
          <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.colMd6}>
                <div className={styles.portfolioItem}>
                    <img  src="../images/folio-pic1.png" alt="Project 1" />
                    <div className={styles.portfolioText}>
                    <h4>Historical Roots of Antisemitism</h4>
                    <p>From ancient times to the present day</p>
                    </div>
                </div>
                </div>
                <div className={styles.colMd6}>
                <div className={styles.portfolioItem}>
                    <img  src="../images/folio-pic2.jpg" alt="Project 2" />
                    <div className={styles.portfolioText}>
                    <h4>Israeli History and Nation Building</h4>
                    <p>The establishment of the State of Israel</p>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.colMd6}>
                <div className={styles.portfolioItem}>
                    <img  src="../images/folio-pic3.jpg" alt="Project 3" />
                    <div className={styles.portfolioText}>
                    <h4>Antisemitism in Contemporary Context</h4>
                    <p>Contemporary antisemitic incidents</p>
                    </div>
                </div>
                </div>
                <div className={styles.colMd6}>
                <div className={styles.portfolioItem}>
                    <img  src="../images/folio-pic4.jpg" alt="Project 4" />
                    <div className={styles.portfolioText}>
                    <h4>Israeli-Palestinian Conflict</h4>
                    <p>Origins and early conflicts</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
          <footer className={styles.footer}>
            <h1 className={styles.bBetterFooter}>b.better</h1>
            <ul className={styles.socialIcons}>
              <li><i className="fa-brands fa-facebook-f"></i></li>
              <li><i className="fa-brands fa-instagram"></i></li> 
              <i className="fa-brands fa-x-twitter"></i>
              <li><i className="fa-brands fa-tiktok"></i></li>
            </ul>
            <div className={styles.textEnd}>
              © 2024 Joao Veiga
            </div>
          </footer>
        </div>
      );
    }

export default Antisemitism;

