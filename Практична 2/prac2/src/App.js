import './App.css';
import Hero from './components/Hero';
import LeftSidebar from './components/LeftSidebar';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Skills from './components/Skills';
import CoverLetter from './components/CoverLetter';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Hero class = "hero"/>
      <LeftSidebar class ='left_sidebar'/>
      <About class='about'/>
      <Services class='services'/>
      <Experience class='exp'/>
      <Portfolio class='portfolio'/>
      <Education class='education'/>
      <Skills class='skills'/>
      <CoverLetter class='cover_letter'/>
      <Contact class='contact'/>
      <Footer class='footer'/>
    </div>
  )
}

export default App;
