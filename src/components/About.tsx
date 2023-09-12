import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/styles/styles";
import { services } from "@/constants/services";
import SectionWrapper from "@/components/hoc/SectionWrapper";
import { fadeIn, textVariant } from "@/utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn({})}
        className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]"
      >
        I'm a skilled Fullstack Developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js and Web3.
        Dedicated to delivering seamless and engaging user interactions, I
        specialize in both front-end and back-end web development, combining
        modern frameworks with industry-standard design methodologies. My
        experience encompasses leading teams, desiging architectures and
        consistently achieving optimal web performance to create user-friendly
        solutions that solve real-world problems. Let's work together to bring
        your ideas to life!
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-6">
        {services.map((service, index) => (
          <div className="sm:w-[280px] w-full">
            <motion.div
              variants={fadeIn({
                direction: "right",
                type: "spring",
                delay: index * 0.5,
                duration: 0.75,
              })}
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
              <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <img
                  src={service.icon}
                  alt="web-development"
                  className="w-16 h-16 object-contain"
                />

                <h3 className="text-white text-[20px] font-bold text-center">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
