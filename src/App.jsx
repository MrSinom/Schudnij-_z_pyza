import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./components/Home"
import AboutMe from "./components/AboutMe"
import Training from "./components/Training"
import Ebook from "./components/Ebook"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
function LandingPage() {
  return (
    <>
      <Home />
      <AboutMe />
      <Training />
      <Ebook />
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
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
