import Agri from "./components/landingPages/agri/Agri";
import Ecommerce from "./components/landingPages/ecommerce/Ecommerce";
import Fmcg from "./components/landingPages/FMCG/Fmcg";
import Footer from "./components/landingPages/footer/Footer";
import Heading from "./components/landingPages/heading/Heading";
import HeroPage from "./components/landingPages/heroPage/HeroPage";
import Hotel from "./components/landingPages/hotel/Hotel";
import Packing from "./components/landingPages/packing/Packing";
import Technology from "./components/landingPages/technology/Technology";




function App() {
  return (
    <>
     <HeroPage/>
     <Heading/>
     <Technology/>
     <Hotel/>
     <Packing/>
     <Fmcg/>
     <Agri/>
     <Ecommerce/>
     <Footer/>
    </>
  );
}

export default App;
