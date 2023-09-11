import Navbar from "@/components/Navbar";
import MyInfo from "@/components/MyInfo";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <MyInfo />
      </div>

      <div className="relative z-0"></div>
    </div>
  );
};

export default App;
