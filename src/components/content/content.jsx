import { render } from "react-dom";
import About from "./About/about";
import Achievements from "./achievements/achievements";
import Roadmap from "./roadmap/roadmap";
import Notes from "./notes/notes";
import Contact from "./contact/contact";
import Gallery from "./gallery/gallery";
import BigText from "./BigText/bigtext";
import Features from "./features/features";
import {Route, Routes } from "react-router-dom";
function Home() {
    return (
        <>
        <BigText />
        <Features />
        </>
    );
}
export default function Content() {
   
   return (
         <div>
              <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/gallery" element={<Gallery/>} />
                <Route path="/achievements" element={<Achievements/>} />
                <Route path="/notes" element={<Notes/>} />

            </Routes>
        </div>
    );
    
}