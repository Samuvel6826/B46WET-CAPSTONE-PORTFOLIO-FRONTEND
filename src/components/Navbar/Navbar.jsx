import { useState } from 'react'
import './navbar.css'
import { Link } from 'react-scroll'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  return <>
    <nav id="navbarr">
      <a href=''>
        <h1 className='logo' >samtocode24</h1>
      </a>

      <div className="desktopMenu">
        <Link activeclass='active' to='intro' spy={true} smooth={true} offset={-68} duration={25} className="desktopMenuListItem">Home</Link>
        <Link activeclass='active' to='certificate' spy={true} smooth={true} offset={-63} duration={25} className="desktopMenuListItem">Certificate</Link>
        <Link activeclass='active' to='about' spy={true} smooth={true} offset={-63} duration={25} className="desktopMenuListItem">Skills</Link>
        <Link activeclass='active' to='projects' spy={true} smooth={true} offset={-63} duration={25} className="desktopMenuListItem">Projects</Link>
        <Link activeclass='active' to='contact' spy={true} smooth={true} offset={-50} duration={25} className="desktopMenuListItem">Contact</Link>
      </div>

      <a href="https://drive.google.com/file/d/16yygIXDehEZYExWuYk0NQ8akR7f_XFVP/view?usp=sharing" target="blank" className='resumeBtn'>
        <img width="25" height="25" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAr0lEQVR4nGNgGDGgZtPhozWbD/+H4EOHqW/BZpjhEDxqAQaoGQ2i4RdENZsP30M3FBeu3nT4LskWVG0+aFa96dBbghZsOvyhduMha/J8seGAYc2mw69wu/zQW5BDGCgBlZuOatRsPvwIi8ufVW4+qsNADVC95ah89abDt5AsuFe97YgyAzVB1faDktWbDx0DYRCbqoaPAjAA1VLEZqwaghhLjUdNC6o3HTqEYcGQBQBpY20z3xAnPQAAAABJRU5ErkJggg==" alt="download--v1" />
        Resume
      </a>

      <div id='mobile'>
        <img src={showMenu ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC+0lEQVR4nO2aO2hUURCG1wfGCJpEjFkLBQWxs7CwUjvBGPOw9VEoWpv4ACsbuyQEBBEREaOgYLkSsprKRkUUC1FjHiJqIugi2kjU6CcDc+Gw3n3dO/eRkB8WLufO/rP/3jlzZs65mcwC5imA1UAX0A8MAaPAV+CnfuT6td7rU9umTBoALAcOAyPAH2rHLHAPOCRcmQQE1AOngWnsIFynhDsuEfuAt0SHSaAt6jC6QHy4AaywFrEOeE78eApkrURs0sedFCbkN4QVsRYYI3lMBn4ympmSCKdSeBYoRQNXSB8uBUmxaUVrLSGV5OSuZvJXDjHgDOlHTyURdcAU6censqWMFoBB8NJ73MCJKuxvqe1S4HFAnwfLCZEqNij6lGMx8KCM3WegWW3PhfCXL9dPSFkdFFLG71CuzcCPEnadarMN+BXC3yzQ6CdkP+EhVfFK5Tvpc3/QmYsvDPx1+AmRzs5s0QKWAA+d8SmvIwQGjHz1+gmRFtQCf71FC9jihNheHdsZsJv0Q85PiGVx+N6LX12Xrul1A/DO0M+on5ACthh0QsxLzdeNfXzxEyI7HdboNE4mxZiJQ4jMg10O/xFiElIwdjLgrN6L9DoXR2iNGTp45dVC2tcc1+usOI96sg8Zkf8Gtivnbk3H34ENOiY7jESZfvuNyM8rXyPw0RnPOyF2O8oFscuAWHr8Zcp30+f+MUfkBwN/7X5CmkIWjTPA1gp/yjdgvdq0ET6EG/4TouT3QxCfVY412viUwogTYldD+Bv2FaHEsiseBI9kBVeOO1XYH1XbVSFKlgPzodWdrrgBoVv7aUd3WRFzZDtovOodR4OMEiX2VCXCEXOZ9OFiTSKcgx05n0gLnkgyqlmIimkG3qRkm7QlkIiig56JhEVsDCXCEZPV84kkwqnFRETRYhn3YWi9qYgiQa0Rh9p4zSk2hBjJaD3G5YxwdSf1BkSdFpr5gC2AfGdYdtYDp1ZraLPUIV0bcFdfoCk4L9UUdCynNu0l+4kFZOY+/gGAvQK/ec/zawAAAABJRU5ErkJggg=='
          :
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGElEQVR4nO2aT08TQRiH90TLAYIJUG/4OWy5EQgJRI8in8HU+C20HDCaGK58BCgBv0FDPNuW9oR6MeoZ0PiQXzKHxozbnXa2O9P0SZps0u7s/DrvvvP+mSSZMaUAD4CnQAM4AzrAL+DWfHTdNt/pN0+ApSQEgBKwD3wE/uCO7jkHnmuspAAB88Ar4Bv++Aq8BMqTErEN9MmPHrCVtxm9ZXIca+V9i6gAn5g8l8CqLxGPzHIXxZXmMK6IFeNGi6YPPBxVRLkgc0ozM3cXDXwgPN6N4mJDZdPFzXYJl16mTdPs2KFTz7IaChVC50vqi28CwFjYSxOiKDYWztLyCZdQ/HHiGaDq8PzfwKJtECVFLtRyELLuOIdd2yAHxMcbmxCloLFxYhOiKDM2OjYhP4mP7zYhqnQQkdcSNz6EhOC1bqbatLrER3uq3W+D+HhtE6JabGxea8c2yJJj0FjNQUjN4fl31qDRDHRBPDTT/hFVxWPh2bSkunPD7FSl/dB5keWFKwVSJv0fV5krjupPECZ/gY1MIgbEvCc8Dp1EDJiYCseh0Br6gqeIWQ6orVAZScQ/jZ4i0+AusDaWiAExqwWZWUvNJi8iLM1QeY5JcJRr7139iZxNrePsYsdcnboJFXxxrR27qBMQErRnskvVYl3RPU0FgCO7Vt8oN1AtVmVM4NQcoPkxcKhG15+VniqzU1IELHifyIwkDO4By8bd8bsJ49QAAAAASUVORK5CYII='} 
          alt="" onClick={() => setShowMenu(!showMenu)} />

        <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
          <div className="listItemCtn">
            <a activeclass='active' href='https://drive.google.com/file/d/16yygIXDehEZYExWuYk0NQ8akR7f_XFVP/view?usp=sharing' target='blank' className="listItem" onClick={() => setShowMenu(false)}>Resume</a>
            <Link activeclass='active' to='intro' spy={true} smooth={true} offset={-65} duration={25} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
            <Link activeclass='active' to='certificate' spy={true} smooth={true} offset={-65} duration={25} className="listItem" onClick={() => setShowMenu(false)}>Certificate</Link>
            <Link activeclass='active' to='about' spy={true} smooth={true} offset={-65} duration={25} className="listItem" onClick={() => setShowMenu(false)}>Skills</Link>
            <Link activeclass='active' to='projects' spy={true} smooth={true} offset={-65} duration={25} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
            <Link activeclass='active' to='contact' spy={true} smooth={true} offset={-50} duration={25} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
          </div>
        </div>
      </div>

    </nav>
  </>
}

export default Navbar