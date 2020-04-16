import React, { useState } from "react"

export default () => {

  const [formVisible, setformVisible] = useState(false);

  function handleClick() {
    setformVisible(true)
  }

  return (
    <div className="cta">
      <div className="cta-landing">
        <button className="btn" onClick={handleClick}>Hire Me!</button>
      </div>
      {formVisible &&
        <form className="form" name="contact" method="POST" data-netlify="true" action="/thankyou">
          <input name="name" type="text" placeholder="Your name and/or company name" required />
          <input name="email" type="email" placeholder="Your e-mail" required />
          <input name="phone" type="tel" placeholder="Your phone number" required />
          <textarea name="request" placeholder="Add some infos"></textarea>
          <input type="submit" />
        </form>
      }
    </div>
  )
}