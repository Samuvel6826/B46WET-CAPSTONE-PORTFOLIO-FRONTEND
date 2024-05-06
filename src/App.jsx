import Navbar from "./components/navbar-Dir/Navbar"
import Intro from './components/intro-Dir/Intro'
import Certificate from "./components/certificate-Dir/Certificate"
import About from './components/about-Dir/About'
import Projects from './components/projects-Dir/Projects'
import Contact from './components/contact-Dir/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return <>
  <div className="app" id="report">
    <Navbar/>
    <Intro/>
    <Certificate/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
  </div>
  </>
}

export default App
