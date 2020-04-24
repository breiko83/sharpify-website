import React, { useState } from 'react'
import { HamburgerArrow } from 'react-animated-burgers'
import SEO from "./seo"

export default () => {

  const [active, setActive] = useState(false);

    return (
      <div>
        <SEO title="Sharpify" url="/" />
        {active &&
          <div className="menu">
            <ul>
              <li>
                <a href="/">Home</a>                
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>
        }
        <HamburgerArrow
          isActive={active}
          toggleButton={() => setActive(!active)}
        ></HamburgerArrow>
      </div>
    )
  }