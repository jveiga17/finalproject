import React from 'react';
import '../../css/Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Our Website</h1>
      </header>
      <section className="main-content">
        <p>This is the main content of the homepage.</p>
        <p>You can add whatever content you want here.</p>
      </section>
      <footer>
        <p>Footer content goes here.</p>
      </footer>
    </div>
  );
}

export default Home;
