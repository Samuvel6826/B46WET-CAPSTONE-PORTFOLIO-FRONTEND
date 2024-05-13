import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Spinner from '../Common-Stuffs/SpinnerComp'

function Contact() {
  const [loading,setLoading] = useState(false)
  const formRef = useRef();

  const formikQuery = useFormik({
    initialValues: {
      your_name: '',
      your_mobile: '',
      your_email: '',
      message: ''
    },
    validationSchema: Yup.object({
      your_name: Yup.string().required('Required').min(2, 'Minimum 2 Characters Required'),
      your_email: Yup.string().required('Required').email('Enter a valid email'),
      message: Yup.string().required('Required')
    }),
    onSubmit: async (values) => {
      setLoading(true)
      sendEmail(values);
      formikQuery.resetForm({
        values: {
          your_name: '',
          your_mobile: '',
          your_email: '',
          message: ''
        }
      });
    }
  });

  const sendEmail = () => {
    emailjs
      .sendForm('service_a6vosqm', 'template_y8grdsb', formRef.current, 'dsQNk0H0okAie8xT2')
      .then((result) => {
        console.log(result);
        setLoading(false)
        alert('Email Sent Successfully!');
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        alert('Failed to send email. Please try again later.');
      });
  };

  return (
    <>
      <section id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactPageDesc">Please fill out the form below to discuss any work opportunities.</span>

        <main>
          <form id="contactForm" className="contactForm" ref={formRef} onSubmit={formikQuery.handleSubmit}>
            <div className='nameContainer'>
              <input
                type="text"
                className="name"
                placeholder='Name'
                id='your_name'
                name='your_name'
                onChange={formikQuery.handleChange}
                onBlur={formikQuery.handleBlur}
                value={formikQuery.values.your_name}
              />
              {formikQuery.touched.your_name && formikQuery.errors.your_name ? <div className='require' style={{ color: "red" }}>*{formikQuery.errors.your_name}</div> : <></>}
            </div>

            <div className='mobileContainer'>
              <input
                type="text"
                className="mobile"
                placeholder='Phone'
                id='your_mobile'
                name='your_mobile'
                onChange={formikQuery.handleChange}
                onBlur={formikQuery.handleBlur}
                value={formikQuery.values.your_mobile}
              />
            </div>

            <div className='emailContainer'>
              <input
                type="email"
                className="email"
                placeholder='Email'
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
                placeholder='Please include as much detail as possible'
                id='message'
                name='message'
                onChange={formikQuery.handleChange}
                onBlur={formikQuery.handleBlur}
                value={formikQuery.values.message}>
              </textarea>
              {formikQuery.touched.message && formikQuery.errors.message ? <div className='require textReq' style={{ color: "red" }}>*{formikQuery.errors.message}</div> : <></>}
            </div>
            <button type='submit' value='Send' className="submitBtn" disabled={loading}>{loading?<Spinner />:"Submit"}</button>
          </form>
          
          <div class="vl"></div>

          <div className='mapContainer'>
            <a href="https://maps.app.goo.gl/eFZ1WJYHYYLXTZ5d9" target="_blank" rel="noopener noreferrer">
              <img src="https://res.cloudinary.com/dgsucveh2/image/upload/v1714810748/Screenshot_2024-05-04_at_1.30.06_PM_lmzudo.png" alt="My Location" title='Click for the exact location' />
            </a>
          </div>
        </main>

        <div className="links">
          <a href="https://wa.me/+919043251797?text=Hey%20Samuvel" target='blank'><img title='Whatsapp' width="60" height="60" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="Whatsapp" /></a>
          
          <a href="https://www.instagram.com/mr_fun_factory_24/" target='blank'><img title='Instagram' width="60" height="60" src="https://img.icons8.com/fluency/96/instagram-new.png" alt="Instagram" /></a>

          <a href="https://www.facebook.com/samuvel68" target='blank'><img title='Meta' width="60" height="60" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="Meta" className="link" /></a>

          <a href="https://twitter.com/samuvel6826" target='blank'><img title='X' width="60" height="60" src="https://img.icons8.com/color/48/twitter--v3.png" alt="X" /></a>

          <a href="https://www.linkedin.com/in/samuvelantony/" target='blank'><img title='Linkedin' width="60" height="60" src="https://img.icons8.com/fluency/48/linkedin.png" alt="Linkedin" /></a>

          <a href="https://github.com/Samuvel6826" target='blank'><img title='GitHub' width="50" height="50" src="https://res.cloudinary.com/dgsucveh2/image/upload/v1705580884/github-mark-white_pzoseb.png" id='gitHub' alt="github" /></a>

          <a href="mailto:samuvel6826@gmail.com" target='blank'><img title='Gmail' width="48" height="60" src="https://img.icons8.com/color/60/gmail-new.png" alt="Gmail" /></a>

          <a href="tel:+919043251797" target='blank'><img id='telephone' title='Click to call me' width="55" height="55" src="https://img.icons8.com/flat-round/64/phone.png" alt="Phone" /></a>
        </div>



      </section>

    </>
  );
}

export default Contact;
