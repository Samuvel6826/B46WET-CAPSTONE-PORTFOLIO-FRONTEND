import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Intro'
import Certificate from "./components/Certificate/Certificate"
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return <>
    <div className="app" id="report">
      <Navbar />
      <Home />
      <Certificate />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  </>
}

export default App
