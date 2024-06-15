import React from "react";

const withoutNavbar = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default withoutNavbar;