import React from "react";
import brackets from "@/assets/svg/Brackets"

type Props = {
  children: any;
  className?: string;
};

const Tagline = ({ children, className }: Props) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default Tagline;
