import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ServicePageData, ServiceImageData } from "@/data";
import ServiceCardTwo from "@/components/service-card-two";
import { useState } from "react";
import { useServiceQuery } from "../hooks/useServiceQuery";

const ServiceTwo = () => {
  const { sectionContent, posts } = ServicePageData;
  const { title, subTitle, text } = sectionContent;

  var [content, setContent] = useState();

  const handleHover = (content) => {
    setContent(content);
  };

  // const serviceURI = useServiceQuery();
  // const id = serviceURI.id;
  // console.log(serviceURI);
  // const matchedData = ServiceImageData.find((page) => page.title === id);

 

  return (
    <section className="service_section commonSection">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h4 className="sub_title red_color">{subTitle}</h4>
            <h2 className="sec_title white">{title}</h2>
          </Col>
        </Row>
        <Row className="custom_column">
          {posts.map((data, index) => (
            <Col key={index} lg={3} md={6} sm={12}>
              <ServiceCardTwo data={data} handleHover={handleHover} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceTwo;
