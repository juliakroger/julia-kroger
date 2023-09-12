import Navbar from "@/components/Navbar";
import MyInfo from "@/components/MyInfo";
import About from "@/components/About";
import Experience from "@/components/Experience";

const App = () => {
  return (
    <div className="relative z-0 w-screen h-screen">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <MyInfo />
      </div>
      <div className="bg-primary flex flex-col items-center">
        <About />
        <Experience />
      </div>
    </div>
  );
};

export default App;
