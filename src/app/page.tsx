import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
export default function Home() {
  return (
    <div className="h-screen w-full bg-white">
      <div className="h-full w-full overflow-hidden">
        <div className="h-screen">
          <Header />
          <HomeSection />
        </div>
      </div>
    </div>
  );
}
