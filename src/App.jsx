import Navbar from "./Components/Navbar"
import { Route ,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Portofolio from "./Pages/Portofolio"
import Contact from "./Pages/Contact"
import { Link, Element } from 'react-scroll';
import {useDispatch, useSelector} from 'react-redux'
import { SidebarNotVisable, SidebarVisable } from "./Store/Slices/SidebarSlice"

function App() {

    const sidebar = useSelector(state=>state.Sidebar)

    const dispatch = useDispatch()
  return (
    <main className="transition-all duration-700 scroll-smooth ">
      <section className="w-full">
        <Navbar />
      </section>
      <section className="bg-[#000000c8]">
          <Element name="#home" onClick={()=>{dispatch(SidebarNotVisable())}} ><Home /> </Element>
          <Element name="#about" className="mt-44 max-sm:mt-10" onClick={()=>{dispatch(SidebarNotVisable())}}><About /> </Element>
          <Element name="#portfolio" className="mt-32 max-sm:mt-10" onClick={()=>{dispatch(SidebarNotVisable())}}> <Portofolio /> </Element>
          <Element name="#contact" className="mt-96" onClick={()=>{dispatch(SidebarNotVisable())}}>  <Contact /> </Element>
      </section>

    </main>

  )
}

export default App
