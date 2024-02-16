import React from 'react';
import Navbar from '../scripts/Navbar'; // import components
import MyCarouselB from '../scripts/CarouselB'; 
import styles from '../../css/Brazil.module.css'; 

const Brazil = () => {
    return (
        <div>
          <header>
            {/* Navbar */}
            <Navbar page="brazil" />
            <h1 className={styles.h1Intro}>Unfortunately, it never <em>really</em> passed...</h1>
            <h3 className={styles.h3Intro}>This complex phenomenon has deep historical roots and continues to shape social dynamics, access to opportunities, and experiences of marginalization within Brazilian society</h3>
            {/* Carousel */}
            <MyCarouselB />
          </header>
          <section className={styles.infoBbetter}>
            <h1>... but there is <strong>always</strong> hope!</h1>
            <div className={styles.h2InfoDiv}>
              <h2>We at </h2><h2 className={styles.bBetterInfo}>b.better</h2><h2> believe in education!</h2>
            </div>
            <h3>No matter the issue, we are strong believers that through education we can achieve true unity, <br /> seeing through the nuances and breaking this surreal colour palette that separate us from each other.</h3>
            <img src="../images/info-brazil.webp" alt="" />
            <h3 className={styles.h3Info}>Below are our special courses regarding the history of Brazil and its people, <br /> encompassing all the major and minor events of the phenomenon's timeline</h3>
          </section>
          <h1 className={styles.h1Courses}>Our Courses on Racism in Brazil</h1>
          <div className={styles.container}>
            <div className={styles.row}>
                <div className="col-md-6">
                <div className={styles.portfolioItem}>
                    <img className={styles.portImg} src="../images/Escrava_Anastacia.jpg" alt="Project 1" />
                    <div className={styles.portfolioText}>
                    <h4>Historical Roots and Legacies of Slavery</h4>
                    <p>Impact of slavery on Brazilian society, culture, and economy</p>
                    </div>
                </div>
                </div>
                <div className={styles.colMd6}>
                <div className={styles.portfolioItem}>
                    <img className={styles.portImg} src="../images/favelavive.jpg" alt="Project 2" />
                    <div className={styles.portfolioText}>
                    <h4>Cultural Representations and Resistance</h4>
                    <p>Afro-Brazilian cultural expressions: music, dance, literature, and other arts</p>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.colMd6}>
                <div className={styles.portfolioItem}>
                    <img className={styles.portImg} src="../images/operacao.jpg" alt="Project 3" />
                    <div className={styles.portfolioText}>
                    <h4>Racialized Violence and Police Brutality</h4>
                    <p>Impacts of militarized policing and "war on drugs" policies on marginalized communities</p>
                    </div>
                </div>
                </div>
                <div className={styles.colMd6}>
                <div className={styles.portfolioItem}>
                    <img className={styles.portImg} src="../images/indigenas.jpg" alt="Project 4" />
                    <div className={styles.portfolioText}>
                    <h4>Land Rights and Indigenous Resistance</h4>
                    <p>Historical dispossession of Indigenous lands and violence against Indigenous peoples</p>
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

export default Brazil;

