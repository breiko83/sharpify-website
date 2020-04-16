import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Services from "../components/services"
import Partners from "../components/partners"

export default () => (
  <div>
    <SEO title="Sharpify" />
    <div className="hero">
      <div className="logo">
        <div className="reveal-text">Sharpify</div>
      </div>
      <a className="scroll" href="#services"><span></span>Scroll</a>
    </div>
    <Services />
    <Partners />
    <footer>
      <address>
        <strong>Sharpify LTD</strong><br />
        Made in Bermondsey London 🇬🇧 | Company reg. number 9391984<br/>        
      </address>
      <a href="#" data-toggle="modal" data-target="#privacyModal">Terms of Service and Privacy Policy</a> | &copy; 2020 Sharpify Ltd
    </footer>
  </div>
)