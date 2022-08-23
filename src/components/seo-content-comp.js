import React from "react";
import serviceS1 from "@/images/s1.jpg";
import serviceS2 from "@/images/s2.jpg";
const ServiceDetailsContent = () => {
  return (
    <div className="serviceArea">
      <img src={serviceS1} alt="" />
      <h3>Search Engine Optimization</h3>
      <p className="text_justify">
        The most result-driven and creative SEO company in Dubai, ENH upholds
        the legacy of providing accurate and effective SEO services to increase
        visibility, engagement, and traffic to our client’s websites. Over the
        past decade, we have worked with customers in both the B2B and B2C
        sectors to get them on the top-ranking pages of Google with highly
        competitive and converting keywords.
      </p>
      <div className="row gaping">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <img src={serviceS2} alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <p className="text_justify">
            Search Engine Optimization is a powerful method for increasing your
            website’s visibility on search engines for the products and services
            it provides. It is very critical to optimize your website through
            SEO so that it can be found above your competitors on the top pages
            of Google and other search engines. Offering the best SEO services
            in Dubai, we are well-equipped with the knowledge and expertise to
            help our clients reach first place on Google.
          </p>
        </div>
      </div>
      <p className="text_justify">
        Our goal is not just limited to bringing in a steady stream of targeted
        new visitors each month, but also to analyze your visitor’s behavior and
        navigation through your website and optimize their journeys to ensure
        maximum sales or inquiries. Some websites unlike others necessitate more
        effort to generate the amount of traffic required to generate a
        significant ROI. With our team of professional SEO experts, we ensure
        accurate results and extreme efficiency to bring you the growth that you
        entrusted us with. With the best SEO services in Dubai, we can help your
        company take the next step toward growth. Our team will evaluate your
        website and determine which search engine marketing services will best
        suit your company’s needs to help it grow to the next level. The most
        important benefit of SEO is that it can be done by anyone and is more
        accessible than you might think. Rather than paying for traditional
        print ads or sponsored posts, putting in the time and effort to learn
        the fundamentals of SEO and possibly investing in a few tools can result
        in greater long-term value for your company.<br></br> <br></br>Here are just a few of the
        reasons why you should consider using organic search for your business.
      </p>
      <ul className="text_justify">
        <li>
          <i className="fa fa-check-square"></i>Brings in more customers through
          organic search
        </li>
        <li>
          <i className="fa fa-check-square"></i>Creates an engaging and
          trustworthy web experience for customers
        </li>
        <li>
          <i className="fa fa-check-square"></i>Improves brand awareness and can
          be done on a budget
        </li>
        <li>
          <i className="fa fa-check-square"></i>Encourages you to focus more on
          user experience elements
        </li>
        <br></br>

        <li>
          <i className="fa fa-check-square"></i>Trackable results and outcomes
        </li>
        <br></br>
        <li>
          <i className="fa fa-check-square"></i>Provides impressive ROI
        </li>
      </ul>
    </div>
  );
};

export default ServiceDetailsContent;
