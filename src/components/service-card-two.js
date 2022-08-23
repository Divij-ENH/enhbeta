import React from "react";
import { Link } from "gatsby";
import ServiceTwo from "@/components/service-home-comp";

const ServiceCardTwo = ({ handleHover , data}) => {
  const { url, iconName, title, content } = data;
 

  return (
    
    <Link className="icon_box_1 text-center" to={url}>
      <div className="flipper" onMouseOver={ event => handleHover(content)} onMouseLeave={ event => handleHover("WE DESIGN DIGITAL PRODUCTS THAT HELP GROW BUSINESSES")}>
        <div className="front">
          <i className={iconName}></i>
          <h3>{title}</h3>
        </div>
        <div className="back">
          <i className={iconName}></i>
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCardTwo;
