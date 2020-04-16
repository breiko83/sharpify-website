import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Footer from "../components/footer"

export default () => (
  <div className="container">
    <SEO title="404: Not found" url="404" />
    <div className="message">      
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p> 
      <Link to="/">Back to the Home page</Link>       
    </div>
    <Footer />
  </div>
)
