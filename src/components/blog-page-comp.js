import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import BlogCard from "@/components/blog-card-comp";
import { getImage } from "gatsby-plugin-image";
import { useLatestPost } from "../hooks/useBlogQuery";

const Blog = () => {
  
  const blogData = useLatestPost();
  console.log(blogData)

  return (
    <section className="commonSection blogPage">
      <Container>
        <Row>
          {blogData.map((post, index) => (
            <Col lg={4} sm={12} md={6} key={index}>
              <BlogCard data={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
