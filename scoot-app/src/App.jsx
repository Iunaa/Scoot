import { Sprites } from "./components/ions/Sprites/Sprites";
import Header from "./components/organisms/Header/Header";
import Hero from "./components/organisms/Hero/Hero";
import ServiceSection from "./components/organisms/ServicesSections/ServiceSection";
import SignUp from "./components/organisms/SignUp/SignUp";

function App() {
  return (
    <>
    {/* <Sprites/> */}
      <Header />
      <Hero />
      <ServiceSection/>
      <SignUp/>
    </>
  );
}

export default App;
