import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCardOne from "@/components/service-card-one-comp";
import { ServicePostData, ServiceHomeThreeData } from "@/data";
import SectionTitle from "./section-title-comp";

const ServiceHomeThree = () => {
  return (
    <section className="service_section_2 commonSection">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            {/* <SectionTitle data={ServiceHomeThreeData} /> */}
           
          </Col>
        </Row>
        <Row>
          {ServicePostData.map((post, index) => (
            <Col lg={6} md={12} key={index}>
              <ServiceCardOne data={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceHomeThree;
