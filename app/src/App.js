import Home from "./components/pages/Home";
import Navbar from "./components/navigation/Navbar";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Publication from "./components/pages/Publication";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";


function App() {
  return (
    <div>
      <Navbar />
      <hr />

      <Home />

      <About />
      <Resume />
      <Portfolio />
      <Publication />
      <Contact />
    </div>
  );
}

export default App;
