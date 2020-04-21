import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


export default () => (
  <StaticQuery
    query={graphql`
      query projectsQuery {
        allMarkdownRemark(
          filter: { fields: { contentType: { eq: "projects" } } },
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
                url
                technologies
                gallery {
                  image {
                    childImageSharp {
                      fixed(width: 400, height: 300) {
                        ...GatsbyImageSharpFixed_withWebp
                      }
                    }
                  }
                }
                photo {
                  childImageSharp {
                    fixed(width: 480) {
                      ...GatsbyImageSharpFixed_withWebp
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
      <div className="projects">
        <h2>Latest Projects</h2>
        <div className="projects-list">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="project" key={node.id}>
              <h3>{node.frontmatter.title}</h3>
              <a href={node.frontmatter.url} target="_blank" rel="noopener noreferrer">
              <Img
                className="project-image"
                fixed={node.frontmatter.photo.childImageSharp.fixed}
                alt={node.frontmatter.title}
              />              
              </a>

              <div
                className="project-description"
                dangerouslySetInnerHTML={{ __html: node.html }}
              ></div>
              <ul className="project-tags">
                {node.frontmatter.technologies.map((technology,index) => (
                  <li key={index}>{technology}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    )}
  />
)

