import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Testimony from "./components/Testimony";
import Footer from "./components/Footer";
function App(){
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Testimony />
      <Contact />
      <Footer />
    
      

    </div>
  )
}
export default App