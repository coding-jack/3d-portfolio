import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "./components"
import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from "./components/canvas"
import Loader from "./components/Loader"

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0 mt-28">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
