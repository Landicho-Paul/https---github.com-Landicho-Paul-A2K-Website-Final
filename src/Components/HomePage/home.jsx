import React from 'react'
 import Wallpaper from "../Pages/Home/Homefront.jsx"
// import Services from "../Pages/KeyServices/KeyServices.jsx"
import Services from "../Pages/Services/Servicesfront.jsx"
import About from "../About/About.jsx"
import Story from "../Pages/Story/Story.jsx"
import News from '../News/newsfront.jsx'
import Contact from '../Pages/ContactForm/ContactForm.jsx'

function home() {
  return (
    <>
    <Wallpaper/>
    <Services/>
    <About/>
    <Story/>
    <News/>
    <Contact/>

      
    </>
  )
}

export default home
