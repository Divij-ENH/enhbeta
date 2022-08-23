import React from "react";
import Footer from "@/components/footer-comp";
import Layout from "@/components/layout-comp";
import PageBanner from "@/components/page-banner-comp";
import ServiceDetails from "@/components/service-details-comp";
import CallToActionOne from "@/components/call-to-action-comp";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-comp";
import { graphql } from "gatsby";

const ServiceDetailsPage = ({ data }) => {
 // console.log(data);

  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Digital Marketing in Dubai">
          <HeaderOne />
          <PageBanner title={data.wpPage.title} name="Service" />
          <ServiceDetails data={data} />
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ServiceDetailsPage;

export const pageQuery = graphql`
  query ($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
      ACF_Service {
        bannertext
        content1
        content2
        content3
        ctaone
        ctathree
        ctatwo
        title
        list
      }
    }
  }
`;
