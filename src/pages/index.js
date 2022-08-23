import React from "react";
import Layout from "@/components/layout-comp";
import Header from "@/components/header-comp";
import Slider from "@/components/slider-comp";
import AboutHome from "@/components/about-home-comp"
import ServiceHome from "@/components/service-home-comp";
import ServiceHome2 from "@/components/service-home2-comp";
import Counter from "@/components/counter-comp";
import TrustedClient from "@/components/trusted-client-comp";
import PortfolioHome from "@/components/portfolio-home-comp";
import ClientCarousel from "@/components/client-carousel-comp";
import BlogHome from "@/components/blog-home-comp";
import CallToActionHome from "@/components/cta-home-comp";
import ContactInfos from "@/components/contact-infos-comp";
import GoogleMap from "@/components/google-map-comp";
import Footer from "@/components/footer-comp";


import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";


const MainPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="ENH Media and Communications">
          <Header />
          <Slider />
          <AboutHome />    
          <ServiceHome2 />
          <ServiceHome />
          <Counter />
          <TrustedClient />
          <PortfolioHome />
          <ClientCarousel />
          <BlogHome />
          <CallToActionHome extraClassName="ready_2" buttonClass="red_bg" />
          <ContactInfos/>     
          <GoogleMap extraClass="contact-page" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default MainPage;
