import React from "react"
import { graphql, Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"


export default ({ data }) => {

  return (
    <div> 
      <Header />    
      <div className="blog-post-container">
        <h1>Blog</h1>
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <Link to={node.frontmatter.path}>
          <h3>{node.frontmatter.title}</h3>
          <div>
            {node.frontmatter.date}
          </div>
        </Link>
        ))}
      </div>  
      <Footer />
    </div>
  )
}

export const query = graphql`
  query allBlogsQuery {
    allMarkdownRemark(filter: { fields: { contentType: { eq: "blog" } } }, sort: {fields: frontmatter___date, order: DESC}) {
      totalCount
      edges {
        node {
          id
          html
          excerpt(pruneLength: 420)
          fields {
            slug
            contentType
          }
          frontmatter {
            title
            path
            date(formatString: "MMMM YYYY")
            photo {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`