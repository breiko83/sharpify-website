import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Footer from "../components/footer"

export default () => (
  <div className="container">
    <SEO title="Thank you!" />
    <div className="message">           
      <h1>Thank you!</h1>
      <p>I've received your request and I will be in touch as soon as possibile.</p>
      <Link to="/">Back to the Home page</Link>      
    </div>
    <Footer />
  </div>
)
