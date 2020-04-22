import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


export default () => (
  <StaticQuery
    query={graphql`
      query socialmediaQuery {
        github: file(relativePath: {eq: "github.png"}) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        twitter: file(relativePath: { eq: "twitter.png" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        linkedin: file(relativePath: { eq: "linkedin.png" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        instagram: file(relativePath: { eq: "instagram.png" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <ul className="socials">
        <li><a href="https://github.com/breiko83"><Img fixed={data.github.childImageSharp.fixed} /></a></li>
        <li><a href="https://twitter.com/carloschiesaro"><Img fixed={data.twitter.childImageSharp.fixed} /></a></li>
        <li><a href="https://www.linkedin.com/in/carlo-schiesaro-39258014/?originalSubdomain=uk"><Img fixed={data.linkedin.childImageSharp.fixed} /></a></li>
        <li><a href="https://www.instagram.com/breiko/"><Img fixed={data.instagram.childImageSharp.fixed} /></a></li>
      </ul>
    )}
  />
)

