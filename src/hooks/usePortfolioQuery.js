import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

export const usePortfolioQuery = () => {
  const portfolioQurey = useStaticQuery(graphql`
    query {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: {} } }
          author: { node: { name: { eq: "Portfolio User" } } }
        }
      ) {
        edges {
          node {
            id
            ACFPortfolio {
              categories
              clientname
            }
            title
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: TRACED_SVG
                      height: 800
                      width: 800
                    )
                  }
                }
              }
            }
            uri
          }
        }
      }
    }
  `);

  const qrdData = portfolioQurey.allWpPost.edges;
  const portfolioDataARY = [{}];

  qrdData.forEach((post, index) => {
    const imageData = post.node.featuredImage
      ? getImage(post.node.featuredImage.node.localFile)
      : "ImageNull";

    portfolioDataARY[index] = {
      title: post.node.title,
      categories: post.node.ACFPortfolio.categories,
      image: imageData,
      uri: post.node.uri,
    };
  });

  return portfolioDataARY;
};
