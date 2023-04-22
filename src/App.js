import "./resources/styles.css";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import Venueinfo from "./components/venueNFO";
import Hightlights from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer";
import { Element } from "react-scroll";
function App() {
  return (
    <div className="App">
      <Element name="events">
        <Header />
      </Element>

      <Featured />
      <Element name="venue">
        <Venueinfo />
      </Element>

      <Element name="highlights">
        <Hightlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Location />
      <Element name="location">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
