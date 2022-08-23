import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./section-title-comp";
import PortfolioCard from "@/components/portfolio-card-comp";
import { PortfolioHomeData, PortfolioData } from "@/data";
import { usePortfolioQuery } from "../hooks/usePortfolioQuery";

const PortfolioHome = ({ data }) => {
  const { sectionContent } = PortfolioHomeData;

  const portfolioData = usePortfolioQuery();

  const portfolioDataSLCD = portfolioData.slice(0, 6);

  return (
    <section className="commonSection porfolio">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={sectionContent} />
          </Col>
        </Row>
        <Row id="Grid">
          <div className="custom">
            <Row>
              {portfolioDataSLCD.map((post, index) => (
                <Col lg={4} md={6} sm={12} key={index}>
                  <PortfolioCard data={post} />
                </Col>
              ))}
            </Row>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioHome;
