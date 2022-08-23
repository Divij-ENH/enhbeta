import React from "react";
import { AboutPageData } from "@/data";
import aboutOneBW from "@/images/about/abt1BW.webp";
import aboutOneCLR from "@/images/about/abt1CLR.webp";
import aboutTwoBW from "@/images/about/abt2BW.webp";
import aboutTwoCLR from "@/images/about/abt2CLR.webp";
import { Row, Container, Col } from "react-bootstrap";

const AboutOne = () => {
  const { sectionContent, gallery, counter } = AboutPageData;
  return (
    <section className="commonSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <h4 className="sub_title"> {sectionContent.subTitle} </h4>{" "}
            <h1 className=""> {sectionContent.title} </h1>
            {""}
          </div>{" "}
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div className="agency_img1">
              {/* <img src={aboutTwoBW} onMouseOver={(e) => (e.currentTarget.src = aboutTwoCLR)} 
      onMouseOut={(e) => (e.currentTarget.src = aboutTwoBW)} alt="" /> */}
              <img src={aboutTwoCLR} alt="" />
            </div>
            {""}
          </div>
          {""}
          <div className="col-lg-12 col-sm-12">
            <div className="agency_img2">
              {/* <img src={aboutOneBW} onMouseOver={(e) => (e.currentTarget.src = aboutOneCLR)} 
      onMouseOut={(e) => (e.currentTarget.src = aboutOneBW)} alt="" /> */}
              <img src={aboutOneCLR} alt="" />
            </div>{" "}
            <div className="compay_date">
              <h5> {counter.title} </h5> <h2> {counter.number} </h2>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      {""}
      <section className="commonSection service_detail">
        <Container>
          <Row>
            <Col lg={12} md={12}>
              <div className="serviceArea text-justify">
                <p>
                  connect brands with people, we at ENH have built our trust and
                  reputation with a clear focus on driving results through
                  effective and measurable digital marketing solutions. As an
                  experienced digital marketing company in Dubai, we make sure
                  all your viewer’s senses are arrested. Our ultimate goal is to
                  make consumers associate your brand with a smile.
                </p>
              </div>
              <div className="serviceArea text-justify">
                <p>
                  We are a 25-member team of digital experts based in the land
                  of dreams, Dubai. Dedicated to delivering measurable and
                  effective results to our clients, we help them reach out to
                  the right target audience with creative and strategic digital
                  solutions. Our arsenal of experts provides 360-degree digital
                  solutions in Website Development, Digital Marketing, Social
                  Media Marketing, SEO Services, Video Production, and Branding
                  & Identity.
                </p>
              </div>
              <div className="serviceArea text-justify">
                <p>
                  Offering the best digital marketing services in UAE, we assure
                  qualified leads, top SEO rankings, increased revenue, and
                  wholesome digital strategies. Helping our clients to connect,
                  engage and build long-term relationships with their target
                  consumers for future credibility and brand identity.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default AboutOne;
