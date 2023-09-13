import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "@/styles/styles";
import { github } from "../assets";
import SectionWrapper from "@/components/hoc/SectionWrapper";
import { fadeIn, textVariant } from "@/utils/motion";
import { projects } from "@/constants/projects";

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
        className="bg-tertiary shadow-card rounded-2xl sm:w-[360px] w-full"
      >
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
                #{tag.name || tag}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn({})}
          className="mt-3 text-secondary text-center text-[17px] leading-[30px] max-w-3xl"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. It reflects my ability to solve
          complex problems, work with different technologies, and manage
          projects effectively.``
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
