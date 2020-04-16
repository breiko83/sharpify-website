import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


export default () => (
  <StaticQuery
    query={graphql`
      query partnersQuery {
        allMarkdownRemark(
          filter: { fields: { contentType: { eq: "partners" } } },
          sort: {fields: frontmatter___order}
        ) {
          totalCount
          edges {
            node {
              id
              fields {
                slug
                contentType
              }
              html
              frontmatter {                
                name                
                photo {
                  childImageSharp {
                    fixed(width: 300) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="partners">
        <h2>Customers & Partners</h2>
        <div className="partners-list">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="partner" key={node.id}>              
              <Img
                className="partner-image"
                fixed={node.frontmatter.photo.childImageSharp.fixed}
                alt={node.frontmatter.name}
              />              
            </div>
          ))}
        </div>
      </div>
    )}
  />
)

