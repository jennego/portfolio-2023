import React from "react"

const ContactForm = () => {
  return (
    <div>
      <form name="contact" method="POST" data-netlify="true">
        <label for="name"> Name</label>
        <input type="text" id="name" name="name" placeholder="Your name.." />

        <label for="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default ContactForm
