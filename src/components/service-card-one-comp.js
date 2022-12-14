import React from "react";
import { Link } from "gatsby";

const ServiceCardOne = ({ data }) => {
  const { title, text, iconName, url } = data;
  return (
    <div className="icon_box_2 text-center">
       <div className="iconWrap">
        <i className={iconName}></i>
      </div>
      <h3>{title}</h3>
      <p className="text_justify">{text}</p>     
      <Link to={url}>discover more</Link>
    </div>
  );
};

export default ServiceCardOne;
