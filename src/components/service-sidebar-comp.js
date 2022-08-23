import React, { Fragment } from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import { useServiceQuery } from "../hooks/useServiceQuery";

const ServiceSidebar = () => {
 

  const serviceData = useServiceQuery();

  var uriData;

  uriData = serviceData.map(
  (item) =>
    (uriData = {
      [item.title]: item.uri,
    })
);



  return (
    <Fragment>
      <aside className="widget categories">
        <h3 className="widget_title">Services</h3>
       

        <div className="meipaly_categorie_widget">
        {/* {renderServices(serviceURI)} */}
          <ul>
          {uriData.map((item, index) => {
          const url = `/services${Object.values(item)}`;
          return (
            <li> <Link to={url}>{Object.keys(item)}</Link></li>
          );
        })}
          </ul>
        </div>
      </aside>
      <aside className="widget categories">
        <div className="meipaly_services_help">
          <h4>need help?</h4>
          <p>
            Prefer speaking with a human to filling out a form? call corporate
            office and we will connect you with a team member who can help.
          </p>
          <h2>
            <a>+971 42 390 828</a>
          </h2>
        </div>
      </aside>
    </Fragment>
  );
};

export default ServiceSidebar;


const renderServices = (serviceURI) => {


  <ul>
          {serviceURI.map((item, index) => {
          const url = `/services${Object.values(item)}`;
          return (
            <li> <Link to={url}>{Object.keys(item)}</Link></li>
          );
        })}
          </ul> 
  // if (serviceURI) {
  //   return serviceURI.map((service) => {
  //     return <li>{service}</li>;
  //   });
  // } else {
  //   return <li>No Categories Selected</li>;
  // }
};

