import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const PortfolioCard = ({ data }) => {
  const { image, title, categories, uri } = data;

  

  const url = `/portfolio${uri}`

  return (
    <div className={`singlefolio`}>
      {typeof image === "object" ? (
        <GatsbyImage image={image} alt={title} />
      ) : (
        <StaticImage src="https://via.placeholder.com/300.png" alt={title} />
      )}

      <div className="folioHover">
        <h6 className="cate">{categories.map((cat) => cat + ",")}</h6>
        <h4>
          <Link to={url}>{title}</Link>
        </h4>
      </div>
    </div>
  );
};

export default PortfolioCard;
