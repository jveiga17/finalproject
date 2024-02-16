import React from 'react';
import Navbar from '../scripts/Navbar'; // import components
import MyCarouselC from '../scripts/CarouselC'; 
import styles from '../../css/Covid.module.css'; 

const Covid = () => {
    return (
        <div>
          <header>
            {/* Navbar */}
            <Navbar page="covid" />
            <h1 className={styles.h1Intro}>Unfortunately, it never <em>really</em> passed...</h1>
            <h3 className={styles.h3Intro}>While COVID-19 may no longer dominate headlines as it once did, it remains a lingering concern, quietly affecting communities and necessitating ongoing precautions and responses to manage its persistent presence and potential resurgence</h3>
            {/* Carousel */}
            <MyCarouselC />
          </header>
          <section className={styles.infoBbetter}>
            <h1>... but there is <strong>always</strong> hope!</h1>
            <div className={styles.h2InfoDiv}>
              <h2>We at </h2><h2 className={styles.bBetterInfo}>b.better</h2><h2> believe in education!</h2>
            </div>
            <h3>No matter the issue, we are strong believers that through education we can achieve true unity, <br /> seeing through the haze of confusing erroneous news and ripping off the masks that hide us from each other.</h3>
            <img src="../images/covidinfo.jpg" alt="" />
            <h3 className={styles.h3Info}>Below are our special courses regarding the history of the COVID-19 pandemic, <br /> encompassing all the major and minor events of the phenomenon's timeline</h3>
          </section>
          <h1 className={styles.h1Courses}>Our Courses on Covid</h1>
          <div className={styles.container}>
            <div className={styles.row}>
                <div className="col-md-6">
                <div className={styles.portfolioItem}>
                    <img className={styles.portImg} src="../images/covid1.jpg" alt="Project 1" />
                    <div className={styles.portfolioText}>
                    <h4>Global Economic Consequences of COVID-19</h4>
                    <p>Analysis of the macroeconomic effects of the pandemic</p>
                    </div>
                </div>
                </div>
                <div className={styles.colMd6}>
                <div className={styles.portfolioItem}>
                    <img className={styles.portImg} src="../images/covid3.webp" alt="Project 2" />
                    <div className={styles.portfolioText}>
                    <h4>Sectoral Impacts and Disruptions</h4>
                    <p>Study of the differential impacts of the pandemic on various sectors of the economy</p>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.colMd6}>
                <div className={styles.portfolioItem}>
                    <img className={styles.portImg} src="../images/covid2.jpg" alt="Project 3" />
                    <div className={styles.portfolioText}>
                    <h4>Healthcare Innovations and Scientific Advancements</h4>
                    <p>Examination of the role of technology, data science, and artificial intelligence in pandemic response and preparedness.</p>
                    </div>
                </div>
                </div>
                <div className={styles.colMd6}>
                <div className={styles.portfolioItem}>
                    <img className={styles.portImg} src="../images/covid4.jpg" alt="Project 4" />
                    <div className={styles.portfolioText}>
                    <h4>Social and Cultural Impacts of the Pandemic</h4>
                    <p>Study of the social and cultural dimensions of the COVID-19 pandemic</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
          <footer className={styles.footer}>
            <h1 className={styles.bBetterFooter}>b.better</h1>
            <ul className={styles.socialIcons}>
              <li><i className={`fa-brands fa-facebook-f ${styles.icone}`}></i></li>
              <li><i className={`fa-brands fa-instagram ${styles.icone}`}></i></li>
              <li><i className={`fa-brands fa-x-twitter ${styles.icone}`}></i></li>
              <li><i className={`fa-brands fa-tiktok ${styles.icone}`}></i></li>
            </ul>
            <div className={styles.textEnd}>
              © 2024 Joao Veiga
            </div>
          </footer>
        </div>
      );
    }

export default Covid;

