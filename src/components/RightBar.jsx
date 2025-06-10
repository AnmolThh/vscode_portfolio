import {
  Files,
  Search,
  GitBranch,
  Blocks,
  BugPlay,
  Container,
} from "lucide-react";
import { useState } from "react";

const RightBar = () => {
  const [nav, setNav] = useState(true);
  const navBar = () => {
    if (nav === true) {
      setNav(false);
    } else {
      setNav(true);
    }
  };
  return (
    <>
      <div className="h-full w-[262px] absolute right-0 top-0">
        <div
          className={`h-full w-[262px] bg-background absolute right-0 top-0 z-10 border-l-1 border-border ${
            nav === false ? "translate-x-[78.1%]" : "translate-x-0"
          }`}
        >
          <h1>hellow</h1>
        </div>

        {/* ICON SECTION */}
        <div className="h-full w-14 bg-background absolute top-0 right-0 flex flex-col items-center gap-6 pt-3 z-20 ">
          <Files className="size-8 text-nav hover:text-ui" onClick={navBar} />
          <Search className="size-8 text-nav hover:text-ui" />
          <GitBranch className="size-8 text-nav hover:text-ui" />
          <Blocks className="size-8 text-nav hover:text-ui" />
          <BugPlay className="size-8 text-nav hover:text-ui" />
          <Container className="size-8 text-nav hover:text-ui" />
        </div>
      </div>
    </>
  );
};

export default RightBar;
