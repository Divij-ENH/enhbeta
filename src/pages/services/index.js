import React from "react";
import Footer from "@/components/footer-comp";
import PageBanner from "@/components/page-banner-comp";
import ServiceOne from "@/components/service-one-comp";
import Layout from "@/components/layout-comp";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-comp";
import CallToActionOne from "@/components/call-to-action-comp";

const ServicePage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Services Page">
          <HeaderOne />
          <PageBanner title="Services" name="Services" />
          <ServiceOne />
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ServicePage;
