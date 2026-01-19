import React from "react";

interface SecondaryHeaderProps {
  children: React.ReactNode;
}

export default function SecondaryHeader({ children }: SecondaryHeaderProps) {
  return (
    <div className="bg-white  px-0 py-0">
      {children}
    </div>
  );
}
