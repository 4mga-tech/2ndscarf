import react from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Thoughts from "./Pages/Thoughts"
import About from "./components/About"

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/thoughts" element={<Thoughts/>} />
    <Route path="/shop" element={<Home/>} />
    <Route path="/contact" element={<Home/>} />
    <Route path="/about" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  )
}
