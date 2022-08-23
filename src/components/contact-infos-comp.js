import React from "react";
import { Link } from "gatsby";
import { ContactInfosBlock, ContactInfosList } from "@/data";

const ContactInfos = () => {
  const { subTitle, title, description } = ContactInfosBlock;
  return (
    <section className="commonSection client_2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title">{subTitle}</h4>
            <h2 className="sec_title">{title}</h2>
            <p className="sec_desc">{description}</p>
          </div>
        </div>
        <div className="row">
          {ContactInfosList.map(({ title, infos, url }, index) => (
            <div
              className="col-lg-6 col-sm-6 col-md-3"
              key={`contact-infos-${index}`}
            >
              <div className="singleClient_2">
                <h3>{title}</h3>
                {infos.map(({name}, index) => (
                   <a href={url} key={`contact-infos-list-${index}`}>{name}</a>
                )
                )}     
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfos;
