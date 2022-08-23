import { useStaticQuery, graphql } from "gatsby";

export const useServiceQuery = () => {
  const serviceQuery = useStaticQuery(graphql`
    query {
      allWpPage(
        filter: { author: { node: { name: { eq: "Service User" } } } }
        sort: { fields: title, order: ASC }
      ) {
        nodes {
          title
          uri
          id
        }
      }
    }
  `);

const serviceData = serviceQuery.allWpPage.nodes;


  return serviceData;
};
