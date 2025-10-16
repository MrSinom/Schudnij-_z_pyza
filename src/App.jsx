import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Training from "./components/Training";
import Ebook from "./components/Ebook";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import CookingSite from "./components/CookingSite";
import MainPage from "./components/MainPage";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainPage/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
