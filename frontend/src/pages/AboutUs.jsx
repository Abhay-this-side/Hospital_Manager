import React from "react";
import "./AboutUs.css" // Ensure this file exists in the same directory

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="about_hero">
      <div className="about_banner">
        <h1>{title}</h1>
        <p>Welcome to Asaan Medical Institute. We are dedicated to providing top-notch medical services to our community.</p>
      </div>
      <div className="image">
        <img src={imageUrl} alt="About Us" />
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | Asaan Medical Institute"}
        imageUrl={"/about.png"}
      />
      <section className="about-us">
        <div className="bio">
          <img src="/whoweare.png" alt="Who We Are" />
          <div className="bio-text">
            <h2>Who We Are</h2>
            <p>
              At Asaan Medical Institute, we are dedicated to providing top-notch medical services to our community. Our team of experienced professionals is here to ensure your health and well-being.
            </p>
          </div>
        </div>

        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver quality healthcare services with compassion and integrity. We strive to create a welcoming and supportive environment for all our patients.
          </p>
        </div>

        <div className="team">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="/founder.jpg" alt="Abhay1" />
              <h3>Abhay1</h3>
              <p>Founder</p>
            </div>
            <div className="team-member">
              <img src="/manager.jpg" alt="Abhay2" />
              <h3>Abhay2</h3>
              <p>Manager</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>

      </section>
    </>
  );
};

export default AboutUs;
