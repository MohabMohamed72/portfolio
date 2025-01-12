import Navbar from "./Components/Navbar"
import { Route ,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Portofolio from "./Pages/Portofolio"
import Contact from "./Pages/Contact"
import { Link, Element } from 'react-scroll';


function App() {

  return (
    <main className="transition-all duration-700 scroll-smooth ">
      <section className="w-full">
        <Navbar />
      </section>
      <section className="bg-[#000000c8]">
          <Element name="#home" ><Home /> </Element>
          <Element name="#about" className="mt-44"><About /> </Element>
          <Element name="#portfolio" className="mt-32"> <Portofolio /> </Element>
          <Element name="#contact" className="mt-96">  <Contact /> </Element>
      </section>

    </main>

  )
}

export default App
