import AboutUs from "./components/AboutUs";
import Benefits from "./components/Benefits";
import Blog from "./components/Blog";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recomendation from "./components/Recomendation";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <Benefits />
      <AboutUs />
      <Recomendation />
      <Testimonials />
      <Faq />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
