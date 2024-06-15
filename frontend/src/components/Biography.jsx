import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <div className="container biography">
      <div className="banner animated-image">
        <img src={imageUrl} alt="Who We Are" />
      </div>
      <div className="banner">
        <p className="biography-title">Biography</p>
        <h3 className="biography-heading">Who We Are</h3>
        <p className="biography-text">
          We are an innovative platform dedicated to streamlining the appointment booking process between hospitals and patients. Our service allows users to book medical appointments effortlessly, eliminating the need to wait in long lines. By providing real-time notifications and updates on available time slots, we ensure a seamless and efficient healthcare experience. Our goal is to enhance patient convenience and improve hospital efficiency through our user-friendly, integrated system.
        </p>
        <p>Our aim is to provide a better approach to the world, so that we live peacefully.</p>
        <p>We have initiated a step towards building a bridge between people and the hospital by creating a website which helps them in there needs. This is not only a website but a one-stop solution to your problem of standing in between lines waiting for hours that will not only save your time but will be smooth process.</p>
      </div>
    </div>
  );
};

export default Biography;
