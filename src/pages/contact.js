import React from "react";
import Footer from "@/components/footer-comp";
import Layout from "@/components/layout-comp";
import ContactInfos from "@/components/contact-infos-comp";
import GoogleMap from "@/components/google-map-comp";
import ContactForm from "@/components/contact-form-comp";
import PageBanner from "@/components/page-banner-comp";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import HeaderTwo from "@/components/header-comp";
const ContactPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Contact Page">
          <HeaderTwo />
          <PageBanner title="Contact Us" name="Contact" />
          <ContactForm />
          <GoogleMap extraClass="contact-page" />
          <ContactInfos />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ContactPage;
