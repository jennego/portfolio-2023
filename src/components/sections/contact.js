import React from "react"
import { Link } from "gatsby"
import ContactForm from "../contact-form"

const Contact = () => {
  return (
    <div className="contact section">
      <Link to="/using-typescript"> Link with Link </Link>
      <a href="/using-typescript"> Link with ahref </a>

      <h1 className="heading">Contact </h1>
      <p>Social media</p>
      <p>Web sites</p>
      <p>Web form</p>
      <ContactForm />
    </div>
  )
}

export default Contact
