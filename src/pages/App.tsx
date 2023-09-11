import Navbar from "@/components/Navbar";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>

      <div className="relative z-0"></div>
    </div>
  );
};

export default App;
