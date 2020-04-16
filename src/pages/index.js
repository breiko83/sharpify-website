import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Services from "../components/services"
import Partners from "../components/partners"
import Footer from "../components/footer"
import CTA from "../components/cta"

export default () => {

  const [scrolled, setScrolled] = useState(false);

  // change state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div> 
      <SEO title="Sharpify" />
      <div className="hero">
        <div className="logo">
          <div className="reveal-text">Sharpify</div>
        </div>
        {!scrolled &&
          <a className="scroll" href="#services"><span></span>Scroll</a>
        }
      </div>
      <Services />
      <Partners />
      <CTA />
      <Footer />
    </div>
  )
}