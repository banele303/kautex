import Image from "next/image";
import Navbar from "./components/navbar";
import HomeHero from "./components/home-hero";
import WhyUS from "./components/why-us";
import AllServices from "./components/all-services";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <HomeHero />
        <WhyUS />
        <AllServices />
      </div>
      <Footer />
    </div>
  );
}
