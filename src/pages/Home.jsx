import InfoSection from "../components/InfoSection";
import RightBar from "../components/RightBar";
import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <>
      <div className="h-screen w-screen bg-background flex flex-col overflow-hidden">
        {/* TOP SECTION */}
        <TopBar />

        {/* BOTTOM SECTION */}
        <div className="flex-1 w-full relative">
          {/* INFO SECTION */}
          <InfoSection />

          {/* RIGHT SECTION */}
          <RightBar />
        </div>
      </div>
    </>
  );
};

export default Home;
