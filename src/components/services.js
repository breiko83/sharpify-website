import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


export default () => (
  <StaticQuery
    query={graphql`
      query servicesQuery {
        allMarkdownRemark(
          filter: { fields: { contentType: { eq: "services" } } },
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
                title                
                photo {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid
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
      <div className="services">
        <h2>Services</h2>
        <div className="services-list">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="service" key={node.id}>
              <h3>{node.frontmatter.title}</h3>
              <Img
                className="service-image"
                fluid={node.frontmatter.photo.childImageSharp.fluid}
                alt={node.frontmatter.title}
              />
              <div
                className="service-description"
                dangerouslySetInnerHTML={{ __html: node.html }}
              ></div>

            </div>
          ))}
        </div>
      </div>
    )}
  />
)

