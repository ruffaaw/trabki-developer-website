import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import Houses from "@/components/Houses";
import AboutInvestment from "@/components/AboutInvestment";
import AboutUs from "@/components/AboutUs";
import OurValues from "@/components/OurValues";
import OurStandards from "@/components/OurStandards";
export default function Home() {
  return (
    <div className="h-full w-full overflow-hidden">
      <Header />
      <HomeSection />
      <AboutInvestment />
      <OurStandards />
      <AboutUs />
      <OurValues />
      <Houses />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
