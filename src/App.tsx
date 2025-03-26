import "./App.css";
import "./typo.css";
import HeroSection from "./section/HeroSection";
import PresentationSection from "./section/PresentationSection";
import ProductSection from "./section/ProductSection";
import TechnicalSection from "./section/TechnicalSection";
import FooterSection from "./section/FooterSection";


function App() {
  return (
    <>
      <div className="overflow-hidden">
         
          <HeroSection />
          <PresentationSection />
          <ProductSection />
          <TechnicalSection />
     
        <FooterSection />
     </div>
    </>
  );
}

export default App;
