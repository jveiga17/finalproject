import React from 'react';
import '../../css/Home.css'; 

const Profile = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to your profile</h1>
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

export default Profile;
