import React, { useRef } from 'react';
import './Contact.css';
import github from '../../assets/github.webp';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import linkedIn from '../../assets/linkedIn.webp'

// for contacting through email, we need to use a service called
// "@emailjs/browser" service
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_akuj2mk', 'template_u4br2mi', form.current, {
            publicKey: '-wM5hcWf8_QlkwE49',
          })
          .then((result) => {
              console.log('SUCCESS!', result.text);
              //to reset form
              e.target.reset();
              alert('Email sent!')
            },(error) => {
              console.log('FAILED...', error.text);
            },
        );
    };
    return (
        <div id='contact'>
            <h2 className='contactTitle'>Contact Me</h2>
            <span className="contactDesc">Please fill out the form below to reach me</span>
            <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='from_name'/>
                <input type="email" className="email" placeholder='Your Email' name='from_email'/>
                <textarea name="message" rows="5" className='msg' placeholder='Your Message'></textarea>
                <button type='submit' value='send' className="submitBtn">Submit</button>
                <div className="links">
                    <a href="#">
                        <img src={twitterIcon} alt="Twitter" className="link" />
                    </a>
                    <a href="#">
                        <img src={linkedIn} alt="LinkedIn" className="link" />
                    </a>
                    <a href="#">
                        <img src={github} alt="Github" className="link" />
                    </a>
                    <a href="#">
                        <img src={youtubeIcon} alt="Youtube" className="link" />
                    </a>      
                </div>
            </form>
        </div>
    )
}

export default Contact;