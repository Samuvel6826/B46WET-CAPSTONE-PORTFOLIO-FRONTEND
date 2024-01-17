import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Contact() {

  const form = useRef();

  const formikQuery = useFormik({
    initialValues: {
      your_name: "",
      your_email: "",
      message: ""
    },
    validationSchema: Yup.object({
      your_name: Yup.string().required("Required").min(2, "Minimum 2 Characters Required"),
      your_email: Yup.string().required("Required").email("Enter a valid email"),
      message: Yup.string().required("Required")
    }),
    onSubmit: async (values) => {
      sendEmail(values)
      formikQuery.resetForm(
       {
          values : {
            your_name: "",
            your_email: "",
            message: ""
          }
        },
      )
    },
  });
  

  const sendEmail = () => {
    emailjs.sendForm('service_a6vosqm', 'template_y8grdsb', form.current, 'dsQNk0H0okAie8xT2')
      .then((result) => {
        console.log(result);
        alert('Email Sent Successfully!')
      }, (error) => {
        console.log(error.text);
      });
  };
  return <>
    <section id="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactPageDesc">
        Please fill out the form below to discuss any work opportunities.
      </span>

      <form id='contactForm' className="contactForm" ref={form} onSubmit={formikQuery.handleSubmit}>

        <div className='nameContainer'>
          <input
            type="text"
            className="name"
            placeholder='Your Name'
            id='your_name'
            name='your_name'
            onChange={formikQuery.handleChange}
            onBlur={formikQuery.handleBlur}
            value={formikQuery.values.your_name}
          />
          {formikQuery.touched.your_name && formikQuery.errors.your_name ? <div className='require' style={{ color: "red" }}>*{formikQuery.errors.your_name}</div> : <></>}
        </div>

        <div className='emailContainer'>
          <input
            type="email"
            className="email"
            placeholder='Your Email'
            id='your_email'
            name='your_email'
            onChange={formikQuery.handleChange}
            onBlur={formikQuery.handleBlur}
            value={formikQuery.values.your_email}
          />
          {formikQuery.touched.your_email && formikQuery.errors.your_email ? <div className='require' style={{ color: "red" }}>*{formikQuery.errors.your_email}</div> : <></>}
        </div>

        <div className='msgContainer'>
          <textarea
            rows="5"
            className="msg"
            placeholder='Enter Your Message'
            id='message'
            name='message'
            onChange={formikQuery.handleChange}
            onBlur={formikQuery.handleBlur}
            value={formikQuery.values.message}>
          </textarea>
          {formikQuery.touched.message && formikQuery.errors.message ? <div className='require textReq' style={{ color: "red" }}>*{formikQuery.errors.message}</div> : <></>}
        </div>
        <button type='submit' value='Send' className="submitBtn">Submit</button>

        <div className="links">

          <a href="tel:+919043251797" target='blank'><img id='telephone' title='Phone Call' width="43" height="43" src="https://img.icons8.com/flat-round/64/phone.png" alt="Phone" /></a>

          <a href="https://www.instagram.com/mr_fun_factory_24/" target='blank'><img title='Instagram' width="48" height="48" src="https://img.icons8.com/fluency/96/instagram-new.png" alt="Instagram" /></a>

          <a href="https://www.linkedin.com/in/samuvelantony/" target='blank'><img title='Linkedin' width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="Linkedin" /></a>

          <a href="https://www.facebook.com/samuvel68" target='blank'><img title='Meta' width="48" height="48" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="Meta" className="link" /></a>

          <a href="https://twitter.com/samuvel6826" target='blank'><img title='X' width="48" height="48" src="https://img.icons8.com/color/48/twitter--v3.png" alt="X" /></a>

          <a href="mailto:samuvel6826@gmail.com" target='blank'><img title='Gmail' width="48" height="48" src="https://img.icons8.com/color/48/gmail-new.png" alt="Gmail" /></a>

          <a href="https://wa.me/+919043251797?text=Hey%20Samuvel" target='blank'><img title='Whatsapp' width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="Whatsapp" /></a>

        </div>

      </form>

    </section>

    <footer className="footer">
      <p>
        Copyright &#169; 2024 Samuvel Antony.
        <a href="https://icons8.com/icon/ZmsyfshyA9PA/bars"></a> Icons by
        <a href="https://icons8.com"> icons8.com. </a>
        All rights reserved.
      </p>
    </footer>

  </>
}

export default Contact