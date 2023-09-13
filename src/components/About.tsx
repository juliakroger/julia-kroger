import React from "react";
import { motion } from "framer-motion";
import { services } from "@/constants/services";
import SectionWrapper from "@/components/hoc/SectionWrapper";
import { fadeIn } from "@/utils/motion";
import Tech from "@/components/Tech";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <>
      <SectionTitle
        title="about me"
        subTitle="Overview."
        text={
          <div className="flex flex-col items-center">
            <img
              className="img-shape mb-10"
              src="https://media.licdn.com/dms/image/D4E03AQFcgj52Nc-6dQ/profile-displayphoto-shrink_800_800/0/1694466344970?e=2147483647&v=beta&t=mTDwfXXIRf4LJWFd44wQ5AueYUa8QTOLU-IEzZfUSE4"
            />

            <p className="text-center text-secondary text-[17px] leading-[30px]">
              I'm a skilled Fullstack Developer with experience in TypeScript
              and JavaScript, and expertise in frameworks like React, Node.js
              and Web3. Dedicated to delivering seamless and engaging user
              interactions, I specialize in both front-end and back-end web
              development, combining modern frameworks with industry-standard
              design methodologies. My experience encompasses leading teams,
              desiging architectures and consistently achieving optimal web
              performance to create user-friendly solutions that solve
              real-world problems. Let's work together to bring your ideas to
              life!
            </p>
          </div>
        }
      />

      <Tech />

      <div className="mt-10 flex flex-wrap gap-6 justify-center">
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
