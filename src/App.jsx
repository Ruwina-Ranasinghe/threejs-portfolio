import { BrowserRouter } from "react-router-dom";
import SocialMediaIcons from "./components/GlobeAnimation/SocialMediaIcons";


import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas
} from "./components";

const App = () => {
  return (
    <BrowserRouter>

      <div className='relative z-0 bg-primary'>
        <div className='bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        {/* Social Media Icons */}
          <SocialMediaIcons />
        <About />
        <div className='relative z-0'>
          <Experience />
          <StarsCanvas />
        </div>
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
