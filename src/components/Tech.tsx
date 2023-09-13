import React from "react";

import SectionWrapper from "@/components/hoc/SectionWrapper";
import { technologies } from "@/constants/technologies";

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {technologies.map((technology) => (
        <img
          key={technology.name}
          className="w-10 h-10"
          src={technology.icon}
        />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
