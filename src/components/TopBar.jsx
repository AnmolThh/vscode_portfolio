import navOpt from "../jsonfiles/nav.json";
import Logo from "../assets/vscode.png";
import { Minus, Copy, X, Search } from "lucide-react";

const TopBar = () => {
  return (
    <>
      <div className="h-10.5 w-full border-b-1 border-border flex items-center text-ui">
        {/* LEFT SECTION */}
        <div className="h-full w-full flex items-center">
          <img src={Logo} alt="logo" className="size-5 ml-3" />
          <div className="flex text-sm ml-5">
            {navOpt.map((item) => (
              <button className="px-2 py-1 rounded-md hover:bg-foreground">
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div className="h-full w-full flex items-center justify-center">
          <div className="w-[90%] h-[70%] border-1 relative border-greyborder bg-grey rounded-lg flex items-center justify-center">
            <Search className="size-4 mr-3" />
            <h1>PORTFOLIO</h1>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="h-full w-full flex items-center justify-end">
          <Minus size={18} className="hover:bg-grey size-10 px-2 py-3" />
          <Copy size={18} className="hover:bg-grey size-10 px-2 py-3" />
          <X size={18} className="hover:bg-red-600 size-10 px-2 py-3" />
        </div>
      </div>
    </>
  );
};

export default TopBar;
