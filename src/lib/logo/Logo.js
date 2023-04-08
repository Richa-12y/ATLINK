import React from "react";
import LogoImage from "./logo.PNG";
import styleLogo from "./logo.module.css";

const Logo = ({ width = 30, height = 30 }) => {
  return (
    <div>
      <img
        src={
          "https://www.atinks.com/wp-content/uploads/2017/10/A.T-inks-logo-600-DPI-1-e1545645137933.png"
        }
        alt="logoimg"
        width={width}
        height={height}
      />
    </div>
  );
};

export default Logo;
