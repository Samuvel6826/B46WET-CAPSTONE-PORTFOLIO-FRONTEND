import './intro.css';
import { Link } from 'react-scroll';

function Intro() {
  return (
    <>
      <div className='navHR_CTN'>
        <hr className='navHR' />
      </div>

      <section id="intro">
        <div className="introContent">
          <h6 className="hello">Hello!👋🏻</h6>
          <h3 className="introText">
            I'm <span className="introName">Samuvel</span>
            <br />
            MERN Stack Web Developer
          </h3>
          <p className="introPara">
            Welcome to my portfolio! Hailing from the beautiful coastal town of Kanyakumari, Tamil Nadu, India, I'm a passionate web developer and designer. Seeking an Assistant Web Developer role or internship to gain experience in a web development environment and contribute to progressive projects. Eager to leverage my beginner-level skills and thrive on challenges. I'm here to showcase my journey in web development. I'm always eager to connect and discuss web development!..Feel free to contact me.
          </p>
          <hr />

          <div className="introbtnCtn">
            <Link to='projects' spy={true} smooth={true} offset={-63} duration={25}>
              <button className="desktopMenuBtn">
                <img width="25" height="25" src="https://img.icons8.com/pastel-glyph/64/suitcase--v3.png" alt="suitcase--v3" /> My Works
              </button>
            </Link>

            <Link to='contact' spy={true} smooth={true} offset={-50} duration={25}>
              <button className="desktopMenuBtn">
                <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/user-male-circle.png" alt="user-male-circle" /> Hire Me
              </button>
            </Link>
          </div>
        </div>

        <div className="dp">
          <div className="flip-dp-inner">
            <div className="flip-dp-front">
              <img
                className='dp-Pic'
                src="https://res.cloudinary.com/dgsucveh2/image/upload/v1704099547/WhatsApp_Image_2024-01-01_at_06.38.56-modified_bjntky.png"
                alt="Front Avatar"
              />
            </div>

            <div className="flip-dp-back">
              <img
                className='dp-Pic'
                src="https://res.cloudinary.com/dgsucveh2/image/upload/v1704032039/IMG20221229121236-modified_1_v2excd.png"
                alt="Back Avatar"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
