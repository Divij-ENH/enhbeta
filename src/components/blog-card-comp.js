import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const BlogCard = ({ data }) => {
  const { image, title, uri, date } = data;

  const url = `/blog${uri}`

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const formatDate = new Date(date);
  const month = months[formatDate.getMonth()];
  const day = formatDate.getFullYear();

  return (
    <div className="latestBlogItem">
      <div className="lbi_thumb">
        <GatsbyImage image={image} alt={title} />
      </div>
      <div className="lbi_details">
        <Link className="lbid_date" to={url}>
          {day +" "+ month}
        </Link>
        <h2>
          <Link to={url}>{title}</Link>
        </h2>
        <Link className="learnM" to={url}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
