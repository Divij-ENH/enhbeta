import React from "react";
import { ServiceImageData } from "@/data";

const ServiceDetailsContent = ({ data }) => {
  const id = data.wpPage.id;

  const matchedData = ServiceImageData.find((page) => page.title === id);

  const ImageBW = matchedData.imageBW;
  const ImageCLR = matchedData.imageCLR;

  const { title, content } = data.wpPage;
  const { bannertext, content1, content2, content3, ctaone, ctatwo, ctathree, list } =
    data.wpPage.ACF_Service;

    console.log(list)

    var listRender;
    if (list != null) {
      listRender =  <ul>
      {list.map((item, index) => {
        return (
          <li key={index}>
            <i className="fa fa-check-square"></i><span>{item}</span>
          </li>
        );
      })}
    </ul>
    } else {
      listRender = <p></p>;
    }
    
  return (
    <div className="serviceArea">
     
      
      <h2 dangerouslySetInnerHTML={{ __html: bannertext }}></h2>
      {/* <p dangerouslySetInnerHTML={{ __html: content }}></p> */}
      <div className="row gaping">
        <div className="col-lg-12 col-sm-6 col-md-12">
        {/* <h3 dangerouslySetInnerHTML={{ __html: title }}></h3> */}
        <p dangerouslySetInnerHTML={{ __html: content1 }}></p>
        
          <img
        src={ImageBW}
        onMouseOver={(e) => (e.currentTarget.src = ImageCLR)}
        onMouseOut={(e) => (e.currentTarget.src = ImageBW)}
        alt=""
      />
          <h4 dangerouslySetInnerHTML={{ __html: ctaone }}></h4>
          <p dangerouslySetInnerHTML={{ __html: content2 }}></p>
          <h4 dangerouslySetInnerHTML={{ __html: ctatwo}}></h4>
          <p dangerouslySetInnerHTML={{ __html: content3 }}></p>
          {listRender}
          <h5 dangerouslySetInnerHTML={{ __html: ctathree }}></h5>
         
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsContent;

const listRender = () => {


}