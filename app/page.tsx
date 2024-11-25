import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlight from "@/components/Highlight";
import Model from "@/components/Model";

const Home = () => {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
    </main>
  );
};

export default Home;
