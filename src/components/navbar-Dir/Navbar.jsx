import React, { useState } from 'react'
import './navbar.css'
import Logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll'
import samres from '../../.././Resume.pdf'
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
          <a href='intro'>
            <img src={Logo} alt="Logo" className='logo'/>
          </a>
        
        <div className="desktopMenu">
            <Link activeClassName='active' to='intro' spy={true} smooth={true} offset={-80} duration={25} className="desktopMenuListItem">Home</Link>
            <Link activeClassName='active' to='certificate' spy={true} smooth={true} offset={-80} duration={25} className="desktopMenuListItem">Certificate</Link>
            <Link activeClassName='active' to='about' spy={true} smooth={true} offset={-80} duration={25} className="desktopMenuListItem">About</Link>
            <Link activeClassName='active' to='projects' spy={true} smooth={true} offset={-80} duration={25} className="desktopMenuListItem">Projects</Link>
            <Link activeClassName='active' to='contact' spy={true} smooth={true} offset={-80} duration={25} className="desktopMenuListItem">Contact</Link>
        </div>

        <a href={samres} target="blank" className='resumeBtn'>
          <img width="25" height="25" src="https://img.icons8.com/windows/32/download--v1.png" alt="download--v1" />
          Resume
        </a>

        {/* <div>
          <button onClick={generatePdfPrompt} className="desktopMenuBtn">{loading?<Spinner />:<span>Export to PDF</span>}</button>
        </div> */}

        <div id='mobile'>
            <img src={showMenu? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC+0lEQVR4nO2aO2hUURCG1wfGCJpEjFkLBQWxs7CwUjvBGPOw9VEoWpv4ACsbuyQEBBEREaOgYLkSsprKRkUUC1FjHiJqIugi2kjU6CcDc+Gw3n3dO/eRkB8WLufO/rP/3jlzZs65mcwC5imA1UAX0A8MAaPAV+CnfuT6td7rU9umTBoALAcOAyPAH2rHLHAPOCRcmQQE1AOngWnsIFynhDsuEfuAt0SHSaAt6jC6QHy4AaywFrEOeE78eApkrURs0sedFCbkN4QVsRYYI3lMBn4ympmSCKdSeBYoRQNXSB8uBUmxaUVrLSGV5OSuZvJXDjHgDOlHTyURdcAU6censqWMFoBB8NJ73MCJKuxvqe1S4HFAnwfLCZEqNij6lGMx8KCM3WegWW3PhfCXL9dPSFkdFFLG71CuzcCPEnadarMN+BXC3yzQ6CdkP+EhVfFK5Tvpc3/QmYsvDPx1+AmRzs5s0QKWAA+d8SmvIwQGjHz1+gmRFtQCf71FC9jihNheHdsZsJv0Q85PiGVx+N6LX12Xrul1A/DO0M+on5ACthh0QsxLzdeNfXzxEyI7HdboNE4mxZiJQ4jMg10O/xFiElIwdjLgrN6L9DoXR2iNGTp45dVC2tcc1+usOI96sg8Zkf8Gtivnbk3H34ENOiY7jESZfvuNyM8rXyPw0RnPOyF2O8oFscuAWHr8Zcp30+f+MUfkBwN/7X5CmkIWjTPA1gp/yjdgvdq0ET6EG/4TouT3QxCfVY412viUwogTYldD+Bv2FaHEsiseBI9kBVeOO1XYH1XbVSFKlgPzodWdrrgBoVv7aUd3WRFzZDtovOodR4OMEiX2VCXCEXOZ9OFiTSKcgx05n0gLnkgyqlmIimkG3qRkm7QlkIiig56JhEVsDCXCEZPV84kkwqnFRETRYhn3YWi9qYgiQa0Rh9p4zSk2hBjJaD3G5YxwdSf1BkSdFpr5gC2AfGdYdtYDp1ZraLPUIV0bcFdfoCk4L9UUdCynNu0l+4kFZOY+/gGAvQK/ec/zawAAAABJRU5ErkJggg==' : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGElEQVR4nO2aT08TQRiH90TLAYIJUG/4OWy5EQgJRI8in8HU+C20HDCaGK58BCgBv0FDPNuW9oR6MeoZ0PiQXzKHxozbnXa2O9P0SZps0u7s/DrvvvP+mSSZMaUAD4CnQAM4AzrAL+DWfHTdNt/pN0+ApSQEgBKwD3wE/uCO7jkHnmuspAAB88Ar4Bv++Aq8BMqTErEN9MmPHrCVtxm9ZXIca+V9i6gAn5g8l8CqLxGPzHIXxZXmMK6IFeNGi6YPPBxVRLkgc0ozM3cXDXwgPN6N4mJDZdPFzXYJl16mTdPs2KFTz7IaChVC50vqi28CwFjYSxOiKDYWztLyCZdQ/HHiGaDq8PzfwKJtECVFLtRyELLuOIdd2yAHxMcbmxCloLFxYhOiKDM2OjYhP4mP7zYhqnQQkdcSNz6EhOC1bqbatLrER3uq3W+D+HhtE6JabGxea8c2yJJj0FjNQUjN4fl31qDRDHRBPDTT/hFVxWPh2bSkunPD7FSl/dB5keWFKwVSJv0fV5krjupPECZ/gY1MIgbEvCc8Dp1EDJiYCseh0Br6gqeIWQ6orVAZScQ/jZ4i0+AusDaWiAExqwWZWUvNJi8iLM1QeY5JcJRr7139iZxNrePsYsdcnboJFXxxrR27qBMQErRnskvVYl3RPU0FgCO7Vt8oN1AtVmVM4NQcoPkxcKhG15+VniqzU1IELHifyIwkDO4By8bd8bsJ49QAAAAASUVORK5CYII='} alt="" onClick={()=>setShowMenu(!showMenu)}/>

            <div className="navMenu" style={{display : showMenu? 'flex' : 'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-65} duration={25} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='certificate' spy={true} smooth={true} offset={-64} duration={25} className="listItem" onClick={()=>setShowMenu(false)}>Certificate</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-64} duration={25} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-64} duration={25} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={25} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </div>

        {/* <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/> */}

    </nav>
  </>
}

export default Navbar