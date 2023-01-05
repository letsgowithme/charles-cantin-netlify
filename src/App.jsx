import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Gallery from "./components/pages/gallery/Gallery";
import PricesServices from "./components/pages/pricesServices/PricesServices";
import Contact from "./components/pages/contact/Contact";
import MentionsLegales from "./components/pages/mentionsLegales/MentionsLegales";

import { hydrate, render } from "react-dom";
 



const App = (
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricesServices" element={<PricesServices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentionsLegales" element={<MentionsLegales />} />
        {/* <Route path="/404" element={NotFound} /> */}
      </Routes>
) 
 
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

export default App;
