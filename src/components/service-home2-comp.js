import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ServicePostTwoData } from "@/data";
import ServiceCardTwo from "@/components/service-card-two";
import { useState } from "react";

const ServiceTwo = () => {
  const { sectionContent, posts } = ServicePostTwoData;
  const { title, subTitle, text } = sectionContent;

  var [content, setContent] = useState();

  const handleHover = (content) => {
    setContent(content);
  };

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
         
          {/* {posts.map((data, index) => (
            <Col key={index} lg={3} md={6} sm={12}>
              <ServiceCardTwo data={data} handleHover={handleHover} />
            </Col>
          ))} */}
          
            <Col lg={12} className="text-center">
          <h5 className="white">
              Committed to assisting your brand’s digital journey, we empower
              you to carve out a niche in the digital marketplace through
              targeted marketing and communication strategies. As one of the
              best digital marketing agency in Dubai, we provide a wide range of
              digital marketing services tailored to your requirements.
            </h5>
          
          </Col>
            
        </Row>
        <Row>
          <p className="sec_desc color_aaa"></p>

          <p className="sec_desc color_aaa">{content}</p>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceTwo;
