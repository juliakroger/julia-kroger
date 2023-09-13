import Navbar from "@/components/Navbar";
import MyInfo from "@/components/MyInfo";
import About from "@/components/About";
import Experience from "@/components/Experience";
import StarsCanvas from "@/components/canvas/Stars";
import Works from "@/components/Works";

const App = () => {
  return (
    <div className="relative z-0 h-screen">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <MyInfo />
      </div>
      <div className="bg-primary flex flex-col items-center pb-20">
        <About />
        <Works />
      </div>

      <div className="bg-primary relative z-0">
        <Experience />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
