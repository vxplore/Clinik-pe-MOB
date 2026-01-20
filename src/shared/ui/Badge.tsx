import React from "react";
import clsx from "clsx";
import { getColors } from "../ColorHelper";

interface BadgeProps {
  color: "orange" | "green" | "gray";
  variant?: "light";
  size: "xs";
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ color, size, children }) => {
  return (
    <div
      className={clsx(
        "px-3.5 py-1 rounded-full font-semibold ",
        size === "xs" && "text-xs",
      )}
      style={getColors({ color })}
    >
      {children}
    </div>
  );
};

export default Badge;
