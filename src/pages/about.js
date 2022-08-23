import React from "react";
import Footer from "@/components/footer-comp";
import Layout from "@/components/layout-comp";
import PageBanner from "@/components/page-banner-comp";
import About from "@/components/about-page-comp";
import TestimonialsOneCarousel from "@/components/testimonials-carousel-comp";
import CallToAction from "@/components/call-to-action-comp";
import HeaderOne from "@/components/header-comp";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import VideoTwo from "@/components/video-one";

const AboutPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="About Us Page">
          <HeaderOne />
          <PageBanner title="About Us" name="About" />
          <About />
        <VideoTwo/>
          <TestimonialsOneCarousel />
          <CallToAction extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default AboutPage;
