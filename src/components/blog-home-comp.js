import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@/components/section-title-comp";
import BlogCard from "@/components/blog-card-comp";
import { BlogHomeSection } from "@/data";

import { useLatestPost } from "../hooks/useBlogQuery";

const BlogHome = () => {


  const blogData = useLatestPost();

  return (
    <section className="commonSection blog">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={BlogHomeSection} />
          </Col>
        </Row>
        <Row>
          {blogData.slice(0, 3).map((post, index) => (
            <Col lg={4} sm={12} md={6} key={index}>
              <BlogCard data={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogHome;
