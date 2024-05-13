import './intro.css';
import { Link } from 'react-scroll';

function Intro() {
  return (
    <>
      <div className='navHR_CTN'>
        <hr className='navHR'/>
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
            I am a skilled and passionate web developer based in Kanyakumari, Tamil Nadu, India. With experience in creating visually appealing and user-friendly websites, I am seeking opportunities to further develop my skills and contribute to exciting projects. Whether it's crafting user-friendly designs or diving into backend development, I thrive on challenges and am committed to delivering high-quality results. Feel free to reach out if you have a project in mind or if you're interested in collaborating. I'm always eager to connect and discuss web development!
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
