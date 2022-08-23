import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image";

const PortfolioDetails = ({ data }) => {
  const qrdData = data.wpPost;

  const title = qrdData.title;

  const image = qrdData.featuredImage
    ? getImage(qrdData.featuredImage.node.localFile)
    : "ImageNull";

  var categories = [];
  categories = qrdData.ACFPortfolio.categories;

  return (
    <section className="commonSection porfolioDetail">
      <Container>
        <Row>
          <Col lg={8} md={7} sm={12}>
            {/* {gallery.map(({ image }, index) => (
              <div className="portDetailThumb" key={index}>
                <img alt="portDetailThumb" src={image} />
              </div>
            ))} */}
            <div className="portDetailThumb">
              {typeof image === "object" ? (
                <GatsbyImage image={image} alt={title} />
              ) : (
                <StaticImage
                  src="https://via.placeholder.com/300.png"
                  alt={title}
                />
              )}
            </div>
          </Col>
          <Col lg={4} md={5} sm={12}>
            <div className="singlePortfoio_content">
              <h3>{title}</h3>
              {/* <p>{text}</p> */}
            </div>
            <div className="singlePortfoio_content">
              <h4>Clients:</h4>
              <p>{title}</p>
            </div>
            <div className="singlePortfoio_content">
              <h4>Category:</h4>
              {renderCategories(categories)}
            </div>
            <div className="singlePortfoio_content">
              <h4>Date:</h4>
              <p>{data.wpPost.ACFPortfolio.projectdate}</p>
            </div>
            <div className="singlePortfoio_content">
              <h4>Follow:</h4>
              {/* <ul>
                {socials.map(({ name, url }, index) => (
                  <li key={index}>
                    <a href={url}>{name}</a>
                  </li>
                ))}
              </ul> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioDetails;

const renderCategories = (categories) => {
  if (categories) {
    return categories.map((category, index) => {
      return <li key={index}>{category}</li>;
    });
  } else {
    return <li>No Categories Selected</li>;
  }
};
