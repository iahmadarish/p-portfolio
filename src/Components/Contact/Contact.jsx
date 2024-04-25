import React from 'react'
import './Contact.css' 
import {MdOutlineEmail} from 'react-icons/md'
import { FaFacebookMessenger } from "react-icons/fa";
import {BsWhatsapp} from 'react-icons/bs' 
import {useRef} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  emailjs
  .sendForm('service_jigy09o', 'template_io2cmsr', form.current, {
    publicKey: 'UD9Y7kuisDSLCOPFT',
  })
  .then(
    () => {
      console.log('SUCCESS!');
    },
    (error) => {
      console.log('FAILED...', error.text);
    },
  );
};
    return (
      <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact_container" >
          <div className="contact_options">
              <article className="contact_option">
                  <MdOutlineEmail className="contact_option-icon" />
                  <h4>Email</h4>
                  <h5>im-ishaq.bd@gmail.com</h5>
                  <a target="_blank" href="meilto:im.ishaq.bd@gmail.com">Send a Message</a>
              </article>
                    <article className="contact_option">
                  <FaFacebookMessenger className="contact_option-icon"  />
                  <h4>Messenger</h4>
                  <h5>Ahmad Ishaq</h5>
                  <a target="_blank" href="https://www.facebook.com/ishaqmoonira/">Send a Message</a>
              </article>
                    <article className="contact_option">
                  <BsWhatsapp className="contact_option-icon"  />
                  <h4>Whats App</h4>
                  <h5>01960465052</h5>
                  <a target="_blank" href="https://api.whatsapp.com/send?phone+01960465052">Send a Message</a>
              </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your full name" required/>
              <input type="email" name="email" placeholder="Your email" required/>
              <textarea name="message" rows="7" placeholder="Your message" required >
              </textarea>
              <button type="submit" className="btn btn_primary"> Send Message </button>
          </form>
      </div>
  </section>
  )
}

export default Contact