import React, { useState } from "react"
import SocialMedia from "./socialmedia"

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
      <form action="/thankyou" data-netlify="true" netlify-honeypot="bot-field" method="POST" name="contact" className={formVisible ? 'form' : 'form hidden'}>
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        <input name="name" type="text" placeholder="Your name and/or company name" required />
        <input name="email" type="email" placeholder="Your e-mail" required />
        <input name="phone" type="tel" placeholder="Your phone number" required />
        <textarea name="request" placeholder="Add some infos"></textarea>
        <input type="submit" />
      </form>
      <p>or find me here</p> 
      <SocialMedia />
    </div>
  )
}