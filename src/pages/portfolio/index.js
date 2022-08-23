import React from "react";
import Footer from "@/components/footer-comp";
import Layout from "@/components/layout-comp";
import PageBanner from "@/components/page-banner-comp";
import PortfolioOne from "@/components/portfolio-one-comp";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-comp";

const PortfolioPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Portfolio">
          <HeaderOne />
          <PageBanner title="Portfolio ENHTST" name="Portfolio" />
          <PortfolioOne />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default PortfolioPage;
