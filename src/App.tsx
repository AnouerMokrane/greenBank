import About from "./sections/About";
import CreditCardRecommandation from "./sections/CreditCardRecommandation";
import CreditCartDesign from "./sections/CreditCartDesign";
import Cta from "./sections/Cta";
import Faqs from "./sections/Faqs";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import LogosSlider from "./sections/LogosSlider";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <main className="overflow-hidden relative">
      <img
        src="./images/dora.svg"
        alt="Header"
        className="w-[96%] min-h-screen absolute top-0 left-[00px] -z-1 max-md:hidden"
      />

      <Header />
      <Hero />
      <About />
      <LogosSlider />
      <Features />
      <CreditCartDesign />
      <CreditCardRecommandation />
      <Testimonials />
      <Faqs />
      <Cta />
      <Footer />
    </main>
  );
}

export default App;
