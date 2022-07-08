import React from "react";
import Logo from "../images/logos.jpeg"; //update locale /src/images

function HeaderComponent() {
  return (
    <div className="header">
      <img src={Logo} alt="logo" />
    </div>
  );
}

export default HeaderComponent;
