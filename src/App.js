import Attributes from "./component/Attributes";
import Experience from "./component/Experience";
import Feature from "./component/Feature";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import Legacy from "./component/Legacy";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Feature />
      <Attributes />
      <Experience />
      <Legacy />
      <Footer />
    </div>
  );
}

export default App;
