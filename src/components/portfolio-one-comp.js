import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioCard from "@/components/portfolio-card-comp";
import { usePortfolioQuery } from "../hooks/usePortfolioQuery";


const Portfolio = () => {
  
  const portfolioData = usePortfolioQuery();

  return (
    <section className="commonSection porfolioPage">
      <Container>
        <Row id="Grid">
          <div className="custom">
            <Row>
              {portfolioData.map((post, index) => (
                <Col lg={4} md={6} sm={12} key={index}>
                  <PortfolioCard data={post} />
                </Col>
              ))}
            </Row>
          </div>
        </Row>
        <Row>
          <Col lg={12} className="text-center">
            <a className="common_btn red_bg" href="/portfolio">
              <span>Load More</span>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
