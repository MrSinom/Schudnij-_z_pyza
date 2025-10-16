import { useState } from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Training from "./components/Training";
import Ebook from "./components/Ebook";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import CookingSite from "./components/CookingSite";
import MainPage from "./components/MainPage";

function App() {
  const [activeComponent, setActiveComponent] = useState("main");

  const renderComponent = () => {
    switch (activeComponent) {
      case "about":
        return <AboutMe />;
      case "training":
        return <Training />;
      case "ebook":
        return <Ebook />;
      case "cooking":
        return <CookingSite />;
      case "contact":
        return <ContactForm />;
      default:
        return <MainPage />;
    }
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Header setActiveComponent={setActiveComponent} />
      <div style={{ flex: 1 }}>
        {renderComponent()}
      </div>
      <Footer setActiveComponent={setActiveComponent} />
    </div>
  );
}

export default App;
