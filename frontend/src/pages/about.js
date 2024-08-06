import React from 'react';
import './About.css'; // Import CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our news website! We are dedicated to bringing you the latest and most accurate news from around the world. Our team of experienced journalists and editors work tirelessly to provide you with up-to-date information on a wide range of topics, including politics, technology, entertainment, and more.
      </p>
      <p>
        Our mission is to keep you informed and engaged with high-quality journalism. We strive to deliver news that is both informative and thought-provoking, ensuring that you stay ahead of the curve in today's fast-paced world.
      </p>
      <p>
        Thank you for visiting our site. If you have any questions or feedback, feel free to contact us at <a href="mailto:contact@newswebsite.com">contact@newswebsite.com</a>.
      </p>
    </div>
  );
};

export default About;
