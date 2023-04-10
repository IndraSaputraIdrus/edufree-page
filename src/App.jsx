import AboutUs from "./components/AboutUs";
import Benefits from "./components/Benefits";
import Faq from "./components/Faq";
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
    </>
  );
}

export default App;
