import React from "react";
import Footer from "@/components/footer-comp";
import Layout from "@/components/layout-comp";
import PageBanner from "@/components/page-banner-comp";
import PortfolioDetails from "@/components/portfolio-details-comp";
import RelatedPortfolio from "@/components/related-portfolio-comp";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-comp";
import { graphql } from "gatsby";

const PortfolioDetailsPage = ({ data }) => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Portfolio Details Page">
          <HeaderOne />
          <PageBanner title={data.wpPost.title} name="Portfolio" />
          <PortfolioDetails data={data} />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default PortfolioDetailsPage;


 export  const portfolioDetailsQuery = graphql`
    query ($id: String!) {
      wpPost(id: { eq: $id }) {
        id
        ACFPortfolio {
          categories
          clientname
          facebookurl
          instagramurl
          otherurl
          projectdate
          websiteurl
          shortdesc
        }
        title
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: TRACED_SVG
                  height: 800
                  width: 800
                )
              }
              publicURL
            }
          }
        }
        uri
      }
    }
  `;

