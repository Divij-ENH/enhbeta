import React from "react";
import { CallToActionHomeData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "gatsby";

const CallToActionHome = () => {
  return (
    <section className="noPadding">
      <Container fluid>
        <Row>
          {CallToActionHomeData.map(({ label, url }, index) => {
            return (
              <Col lg={6} md={6} className="noPadding" key={index}>
                <div
                  className={`btn_link ${0 === index % 2 ? "bg_black" : " "}`}
                >
                  <Link to={url}>{label}</Link>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default CallToActionHome;
