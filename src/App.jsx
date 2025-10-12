import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Training from "./components/Training";
import Ebook from "./components/Ebook";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import CookingSite from "./components/CookingSite";
import AnimatedSection from "./animation/AnimatedSection";
import StatsSection from "./components/StatsSection";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          {/* Strona główna - możesz tu pokazać wszystkie sekcje po kolei */}
          <Route
            path="/"
            element={
              <>
                <AnimatedSection direction="right"><AboutMe /></AnimatedSection>
                <AnimatedSection direction="left"><Training /></AnimatedSection>
                <AnimatedSection direction="right"><Ebook /></AnimatedSection>
                <AnimatedSection direction="left"><CookingSite /></AnimatedSection>
                <AnimatedSection direction="right"><ContactForm /></AnimatedSection>
              </>
            }
          />

          {/* Podstrony indywidualne */}
          <Route path="/about" element={<AboutMe />} />
          <Route path="/training" element={<Training />} />
          <Route path="/ebook" element={<Ebook />} />
          <Route path="/cookingd" element={<CookingSite />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/stats" element={<StatsSection />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
