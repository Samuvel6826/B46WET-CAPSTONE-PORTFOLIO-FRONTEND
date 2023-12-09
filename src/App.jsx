// import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Navbar from "./components/navbar-Dir/Navbar"
import Intro from './components/intro-Dir/Intro'
import About from './components/about-Dir/About'
import Projects from './components/projects-Dir/Projects'
import Contact from './components/contact-Dir/Contact'
import Footer from './components/footer-Dir/Footer'

function App() {
  return <>
  <div className="app">
    <Navbar/>
    <Intro/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    {/* <BrowserRouter>
      <Routes>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/intro' element={<Intro/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='*' element={<Intro/>}/>
      </Routes>
    </BrowserRouter> */}
  </div>
  </>
}

export default App
