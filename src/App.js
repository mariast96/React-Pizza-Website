import React from "react";
import { BrowserRouter as Router } from "react-router-dom"
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData } from "./components/Products/data";
import { desertData } from "./components/Products/data";
import Featured from "./components/Featured";
import Footer from "./components/Footer";

function App() {
   return (
      <Router>
         <GlobalStyle />
         <Hero />
         <Products heading='Choose your favourite' data={productData} />
         <Featured />
         <Products heading='Choose your favourite' data={desertData} />
         <Footer />
      </Router>
   );
}

export default App;
