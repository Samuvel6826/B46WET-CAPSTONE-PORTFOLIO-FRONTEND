import React, { useState } from 'react'
import './navbar.css'
import Logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll'
// import { jsPDF } from "jspdf";
// import Spinner from '../common/SpinnerComp'

function Navbar() {
  const [showMenu,setShowMenu] = useState(false)
//   const [loading,setLoading] = useState(false)

//   const generatePdfPrompt = () => {
//   if (confirm("After accepted wait for a minute for the file to download") == true) {
//     setLoading(true)
//     generatePdf(loading)
//   } 
// }

//   const generatePdf = () => {
//     const doc = new jsPDF({
//       orientation: 'l',
//       unit: 'pt',
//       format: 'a4',
//       compress: "true",
//       putOnlyUsedFonts:true
//      });
//     doc.html(document.body).save("Samuvel Portfolio.pdf");
    
//     loading?(setLoading(false)):(!loading)
//   };

  return <>
    <nav id="navbarr">
        <img src={Logo} alt="Logo" className='logo'/>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-80} duration={25} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='certificate' spy={true} smooth={true} offset={-80} duration={25} className="desktopMenuListItem">Certificate</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-80} duration={25} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-80} duration={25} className="desktopMenuListItem">Projects</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={25} className="desktopMenuListItem">Contact</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}}>
            <img src={contactImg} alt="Contact Image" className="desktopMenuImg" />Contact Me
        </button>

        {/* <div>
          <button onClick={generatePdfPrompt} className="desktopMenuBtn">{loading?<Spinner />:<span>Export to PDF</span>}</button>
        </div> */}

        <div id='mobile'>
            <i id='bar' className={showMenu? 'fas fa-times' : 'fas fa-bars'} onClick={()=>setShowMenu(!showMenu)}></i>

            <div className="navMenu" style={{display : showMenu? 'flex' : 'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-65} duration={25} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='certificate' spy={true} smooth={true} offset={-64} duration={25} className="listItem" onClick={()=>setShowMenu(false)}>Certificate</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-64} duration={25} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-64} duration={25} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-64} duration={25} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </div>

        {/* <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/> */}

    </nav>
  </>
}

export default Navbar