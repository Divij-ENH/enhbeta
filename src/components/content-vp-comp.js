import React from "react";
import ImageBW from "@/images/services/vp-BW.webp";
import ImageCLR from "@/images/services/vp-CLR.webp";
import serviceS2 from "@/images/vp.svg";
const ServiceDetailsContent = () => {

    
  return (
    
    <div className="serviceArea">
      <img  className ="image-layer main-slider main-slider__two"  src={ImageBW} onMouseOver={(e) => (e.currentTarget.src = ImageCLR)} 
      onMouseOut={(e) => (e.currentTarget.src = ImageBW)} alt="" />
      <p className="text_justify">
        Do you require an eye-catching corporate video to communicate your
        brand? Are you looking for the best corporate video production company
        in Dubai to keep your website updated on a regular basis? Are you
        looking for a team of creative professionals who understand what you’re
        trying to accomplish?With over a decade of experience in corporate
        videography services in Dubai, we have a pool of highly creative,
        trained, and motivated professionals working to create unique and
        exclusive content for our precious clients.
      </p>
      <div className="row gaping">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <img src={serviceS2} alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <p className="text_justify">
            As a modern video production company in Dubai, we believe in
            utilizing today’s technology to not only film, edit, and produce
            your video, but also to distribute those films as widely as possible
            in order to assist you in meeting your branding and sales goals.
            Because, as we say, you don’t want to make videos. You want to
            increase your sales. We provide complete video production services
            to ensure that our clients receive the best output and quality
            results that help us build long-term relationships.
          </p>
        </div>
      </div>
      <p className="text_justify">
        Producing the right video at the right time is critical to the video’s
        success. As a corporate video production company in Dubai, we can assist
        you in creating the appropriate video content at each stage of the
        process. This will assist you in maximizing your ROI. We create engaging
        and effective campaigns from concept to production and delivery by
        combining intelligent thinking, clever concepts, and powerful messaging.
      </p>

      <p>
        Our process is simple because we adore the art and creativity of
        collaborating. We grow your brand together and ask the question, “What
        does the viewer need to think, feel and do?” We create low-cost,
        high-quality online video content and corporate marketing videos. We’ve
        had the pleasure of working with both local and international brands,
        and we have a reputation for producing low-cost video content.
      </p>
    </div>
  );
};

export default ServiceDetailsContent;
