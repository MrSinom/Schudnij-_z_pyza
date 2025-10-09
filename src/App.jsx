import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Training from "./components/Training"
import Ebook from "./components/Ebook"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import CookingSite from "./components/CookingSite";
function LandingPage() {
  return (
    <>
      <AboutMe />
      <Training />
      <Ebook />
      <CookingSite/>
      <ContactForm />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/training" element={<Training />} />
          <Route path="/ebook" element={<Ebook />} />
          <Route path="/cookingd" element={<CookingSite/>}/>
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
