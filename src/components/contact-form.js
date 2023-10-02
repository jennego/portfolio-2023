import React from "react"

const ContactForm = () => {

  return (
    <div style={{paddingTop: '1.5rem'}}>
      <form name="contact" method="POST" data-netlify="true">


        <label for="name"> Name</label>
        <input type="text" id="name" name="name" placeholder="Your name.."  />
  

        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your inquiry here.."
          ></textarea>
    

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default ContactForm
