import { useState } from "react";
import Navbar from "./assets/components/Header/Navbar";
import Slider from "./assets/components/carousals/Carousel";
import "./App.css";
import Testimonials from "./assets/components/testimonials/Testimonials";
import Products from "./assets/components/products/Products";
import Footer from "./assets/components/footer/Footer";
import Analytics from "./assets/components/analytics/Analytics";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/components/pages/home";
import AllProducts from "./assets/components/pages/allProducts";
import AirCompressor from "./assets/components/pages/AirCompressor";
import Washer from "./assets/components/pages/Washer";
import Agriculture from "./assets/components/pages/Agriculture";
import ProdDetail from "./assets/components/products/ProdDetail";
import Others from "./assets/components/pages/Others";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      {/* <Slider /> */}
      {/* <Products />
      <Analytics />
      <Testimonials /> */}
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/allProducts" element={<AllProducts/>}/>
        <Route path="/compressor" element={<AirCompressor/>}/>
        <Route path="/washer" element={<Washer/>}/>
        <Route path="/agriculture" element={<Agriculture/>}/>
        <Route path="/otherProducts" element={<Others/>}/>
        <Route path="/ProdDetails/:id" element={<ProdDetail/>}/>
        
      </Routes>
      </BrowserRouter>


      <Footer />
    </>
  );
}

export default App;
