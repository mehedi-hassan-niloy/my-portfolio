
import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Navbars from './Components/Navbars/Navbars'
import Project from './Components/Projects/Project'

import Skills from './Components/Skills/Skills'
import SocialLink from './Components/SocialLink/SocialLink'

function App() {
  

  return (
    <>
     <Navbars></Navbars> 
     <Home></Home>
     <SocialLink></SocialLink>
     <About></About>
     <Project></Project>
     <Skills></Skills>
     <Contact></Contact>
     
    </>
  )
}

export default App
