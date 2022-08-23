import React from "react";
import Footer from "@/components/footer-comp";
import Layout from "@/components/layout-comp";
import PageBanner from "@/components/page-banner-comp";
import Blog from "@/components/blog-page-comp";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-comp";

const BlogPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Blog ENH TEST">
          <HeaderOne />
          <PageBanner title="Blog ENHTEST" name="Blog" />
          <Blog />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default BlogPage;
