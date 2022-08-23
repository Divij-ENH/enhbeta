import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import BlogSidebar from "@/components/blog-sidebar-comp";
import { BlogData } from "@/data";
import BlogCard from "@/components/blog-card-comp";
import blogS1 from "@/images/logo.png";
import { getImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";



const BlogThree = () => {


  const pobj = useLatestPost();
    const pdata =  pobj.allWpPost.edges
    const obj = [{}];

    //console.log(pdata);

    
    
pdata.forEach((elem, i) => {

  const imageData = (elem.node.featuredImage) ? getImage(elem.node.featuredImage.gatsbyImageData) : blogS1
  
  obj[i] = {
    title: elem.node.title,
    date: elem.node.date,
    image: imageData,
    url: elem.node.uri,
  }

  //console.log(imageData);
})


  return (
    <section className="commonSection blogPage">
      <Container>
        <Row>
          <Col lg={8} sm={8}>
            <Row>
              {obj.map((post, index) => (
                <Col lg={6} sm={12} md={6} key={index}>
                  <BlogCard data={post} />
                </Col>
              ))}
            </Row>
  
          </Col>
          <Col lg={4} sm={4} className="sidebar">
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogThree;
