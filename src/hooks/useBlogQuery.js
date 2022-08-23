import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

export const useLatestPost = () => {
  const blogQuery = useStaticQuery(graphql`
    query {
      allWpPost(
        sort: { fields: date, order: DESC }
        filter: { author: { node: { name: { eq: "Blog User" } } } }
      ) {
        edges {
          node {
            title
            excerpt
            slug
            uri
            date
            categories {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                id
                localFile {
                  publicURL
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
          }
        }
      }
    }
  `);

  const qrdData = blogQuery.allWpPost.edges;
  const blogDataARY = [{}];

  qrdData.forEach((post, index) => {
    const imageData = post.node.featuredImage
      ? getImage(post.node.featuredImage.node.localFile)
      : "ImageNull";

    blogDataARY[index] = {
      title: post.node.title,
      date: post.node.date,
      image: imageData,
      uri: post.node.uri,
    };
  });

  return blogDataARY;
};
