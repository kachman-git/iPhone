import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItworks from "./components/HowItworks";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Highlight />
      {/* <Model /> */}
      <Features />
      <HowItworks />
      <Footer />
    </main>
  );
};

export default Home;
