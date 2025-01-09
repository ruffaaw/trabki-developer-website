import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import Houses from "@/components/Houses";
import Investment from "@/components/Investment";
import Localization from "@/components/Localization";
import Profits from "@/components/Profits";
export default function Home() {
  return (
    <div className="h-full w-full bg-green1 overflow-hidden">
      <Header />
      <HomeSection />
      <Investment />
      <Localization />
      <Profits />
      <Houses />
    </div>
  );
}
