import React from "react";

const PageBanner = ({ title, name, image, image1 }) => {
  return (
    <section className="pageBanner"
    // style={{ backgroundImage: `url(${image})`}}
    // onMouseOver={(e) => (e.currentTarget.style.backgroundImage =`url(${image1})`)}
    // onMouseLeave={(e) => (e.currentTarget.style.backgroundImage =`url(${image})`)}     
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner_content text-center">
              <h4>
                home - {name}
              </h4>
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
