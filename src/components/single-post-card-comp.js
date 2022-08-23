import React, { Fragment } from "react";
import AuthorCard from "@/components/author-card-comp";
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image";

const SinglePostCard = ({ data }) => {
  const title = data.wpPost.title;
  const content = data.wpPost.content;
  const image = data.wpPost.featuredImage
    ? getImage(data.wpPost.featuredImage.node.localFile)
    : "Image Null";

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

  let formatDate = new Date(data.wpPost.date);
  let month = months[formatDate.getMonth()];
  let day = formatDate.getFullYear();

  return (
    <Fragment>
      <div className="single_blog">
        <div className="blog_thumb">
          {typeof image === "object" ? (
            <GatsbyImage image={image} alt={title} />
          ) : (
            <StaticImage
              src="https://via.placeholder.com/300.png"
              alt={title}
            />
          )}
        </div>
        <div className="blog_headings">
          <span className="blog_date">{month + " " + day}</span>
          <h2>{data.wpPost.title}</h2>
          <p className="blog_metas">
            <a href="/">By ENH Media</a>
          </p>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="blog_details"
        ></div>
        <div className="blog_tagitems">
          <span>Tags:</span>
          <a href="/">Business</a>, <a href="/">Agency</a>,{" "}
          <a href="/">Digital</a>, <a href="/">Technology</a>
        </div>
        <AuthorCard />
      </div>
    </Fragment>
  );
};

export default SinglePostCard;
