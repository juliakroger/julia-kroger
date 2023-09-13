import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import SectionWrapper from "@/components/hoc/SectionWrapper";
import { fadeIn } from "@/utils/motion";
import { projects } from "@/constants/projects";
import SectionTitle from "./SectionTitle";

interface Props {
  index: number;
  name?: string;
  url?: string;
  date?: string;
  description?: string;
  tags: string[];
  image?: string;
  source_code_link?: string;
}

const ProjectCard = ({
  index,
  name,
  url,
  date,
  description,
  tags,
  image,
  source_code_link,
}: Props) => {
  return (
    <>
      <div className="relative w-full h-[230px]">
        <img
          onClick={() => window.open(url, "_blank")}
          src={image}
          alt="project_image"
          className="cursor-pointer w-full h-full object-cover rounded-t-2xl"
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>

          {source_code_link ? (
            <div onClick={() => window.open(source_code_link, "_blank")}>
              <img
                src={github}
                alt="source code"
                className="w-6 h-6 object-contain cursor-pointer"
              />
            </div>
          ) : null}
        </div>
        <p className="mt-2 text-white-100 text-[14px]">{date}</p>

        <p className="mt-2 text-secondary text-[14px]">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}`} className={`text-[14px]`}>
              #{tag}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

const Works = () => {
  return (
    <>
      <SectionTitle
        title="My work"
        subTitle="Projects."
        text="Following projects showcases my skills and experience through
          real-world examples of my work. It reflects my ability to solve
          complex problems, work with different technologies, and manage
          projects effectively."
      />

      <div className="sm:mt-20 grid sm:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <div key={`project-${index}`}>
            <motion.div
              variants={fadeIn({
                direction: "up",
                type: "spring",
                delay: index * 0.5,
                duration: 0.75,
              })}
            >
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="hidden sm:flex bg-tertiary shadow-card rounded-2xl sm:w-[360px] w-full"
              >
                <ProjectCard
                  key={`project-${index}`}
                  index={index}
                  {...project}
                />
              </Tilt>
            </motion.div>

            <div className=" sm:hidden bg-tertiary shadow-card rounded-2xl sm:w-[360px] w-full">
              <ProjectCard index={index} {...project} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
