import React from "react";
import Footer from "@/components/footer-comp";
import Layout from "@/components/layout-comp";
import PageBanner from "@/components/page-banner-comp";
import BlogDetails from "@/components/blog-details-comp";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-comp";
import { graphql } from "gatsby";

const BlogSinglePage = ({ data }) => {
 
  console.log(data);
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="data.wpPost.title">
          <HeaderOne />
          <PageBanner title={data.wpPost.title} name="Blog" />
          <BlogDetails data={data} />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default BlogSinglePage;

export const postQuery = graphql`
  query ($id: String!) {
    wpPost(id: { eq: $id }) {
      id
      title
      content
      date
      featuredImage {
        node {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, height: 800, width: 800)
            }
          }
        }
      }
    }
  }
`;
