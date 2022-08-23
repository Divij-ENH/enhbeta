import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogSidebar from "@/components/blog-sidebar-comp";
import SinglePostCard from "@/components/single-post-card-comp";

const BlogDetails = ({data}) => {
  return (
    <section className="commonSection blogDetails">
      <Container>
        <Row>
          <Col lg={12}>
            <SinglePostCard data={data}/>
          </Col>
          <Col lg={4} className="sidebar">
            {/* <BlogSidebar /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetails;
