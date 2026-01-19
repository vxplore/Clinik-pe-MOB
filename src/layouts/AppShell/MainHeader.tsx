// import { Avatar } from "@mantine/core";
// import { Menu } from "lucide-react";
import threeline from "../../assets/threeline.svg";
// import React from "react";

const MainHeader = ({ title } : { title: string | undefined }) => {
  return (
    <div>
      {/* Left: Menu + Greeting */}
      <div className="flex justify-start items-center gap-3">
        <img className="p-3" src={threeline} alt="Menu" />

        <div className="leading-tight">
          <p className="text font-semibold text-xl text-gray-900">{title}</p>
          {/* <p className="text-xs text-gray-500">Welcome back, Ajij</p> */}
        </div>
      </div>

      {/* Right: Avatar */}
    </div>
  );
};

export default MainHeader;
