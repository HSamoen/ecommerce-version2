import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
// import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import NoPage from "./pages/NoPage/NoPage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";


export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} exact/>
          {/* <Route path="products" element={<Products />} exact/> */}
          <Route path="contact" element={<Contact />} exact/>
          <Route path="*" element={<NoPage />} exact/>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
