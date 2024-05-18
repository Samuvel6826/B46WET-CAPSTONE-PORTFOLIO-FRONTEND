import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Spinner from '../Common-Stuffs/SpinnerComp'

function Contact() {
  const [loading, setLoading] = useState(false)
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
        <div className='contactBorder'>
          
          <header className='contactHeader'>
          <h1 className="contactPageTitle">Contact Me</h1>
          <h5 className="contactPageDesc">Please fill out the form below to discuss any work opportunities.</h5>
          </header>

          <main className='contactMain'>
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
                  placeholder='Let me know how I can assist you'
                  id='message'
                  name='message'
                  onChange={formikQuery.handleChange}
                  onBlur={formikQuery.handleBlur}
                  value={formikQuery.values.message}>
                </textarea>
                {formikQuery.touched.message && formikQuery.errors.message ? <div className='require' style={{ color: "red" }}>*{formikQuery.errors.message}</div> : <></>}
              </div>
              <button type='submit' value='Send' className="submitBtn" disabled={loading}>{loading ? <Spinner /> : "Submit"}</button>
            </form>

            <div className="vl"></div>

            <div className='mapContainer'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7898.414636338594!2d77.246475!3d8.181859!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTAnNTQuNyJOIDc3wrAxNCc0Ny4zIkU!5e0!3m2!1sen!2sin!4v1715710048191!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>

            </div>
          </main>

          <div className="links">
            <a href="https://wa.me/+919043251797?text=Hey%20Samuvel" target='blank'><img title='Whatsapp' width="50" height="50" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="Whatsapp" /></a>

            <a href="https://www.instagram.com/mr_fun_factory_24/" target='blank'><img title='Instagram' width="50" height="50" src="https://img.icons8.com/fluency/96/instagram-new.png" alt="Instagram" /></a>

            <a href="https://www.facebook.com/samuvel68" target='blank'><img title='Meta' width="50" height="50" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="Meta" className="link" /></a>

            <a href="https://x.com/samuvel6826" target='blank'><img title='X' width="50" height="50" src="https://i.pinimg.com/564x/cc/31/6f/cc316f97197528e5e26e613a93ab16a4.jpg" alt="X" /></a>

            <a href="https://www.linkedin.com/in/samuvelantony/" target='blank'><img title='Linkedin' width="50" height="50" src="https://img.icons8.com/fluency/48/linkedin.png" alt="Linkedin" /></a>

            <a href="https://github.com/Samuvel6826" target='blank'><img title='GitHub' width="40" height="40" src="https://res.cloudinary.com/dgsucveh2/image/upload/v1705580884/github-mark-white_pzoseb.png" id='gitHub' alt="github" /></a>

            <a href="mailto:samuvel6826@gmail.com" target='blank'><img title='Gmail' width="50" height="50" src="https://img.icons8.com/color/60/gmail-new.png" alt="Gmail" /></a>

            <a href="tel:+919043251797" target='blank'><img id='telephone' title='Click to call me' width="45" height="45" src="https://img.icons8.com/flat-round/64/phone.png" alt="Phone" /></a>
          </div>
        </div>
      </section>

    </>
  );
}

export default Contact;
