import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import Investment from "@/components/Investment";
import Localization from "@/components/Localization";
export default function Home() {
  return (
    <div className="h-full w-full bg-green1 overflow-hidden">
      <Header />
      <HomeSection />
      <Investment />
      <Localization />
    </div>
  );
}
