import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/styles/styles";
import { fadeIn, textVariant } from "@/utils/motion";

const SectionTitle = ({ title = "", subTitle = "", text = "" }: any) => (
  <>
    <motion.div variants={textVariant()} className="sm:flex hidden">
      <p className={`${styles.sectionSubText} text-center`}>{title}</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>{subTitle}</h2>
    </motion.div>

    <div className="sm:hidden">
      <p className={`${styles.sectionSubText} text-center`}>{title}</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>{subTitle}</h2>
    </div>

    {text ? (
      <div className="w-full flex justify-center mt-3">
        <motion.div
          variants={fadeIn({})}
          className="sm:flex hidden mt-3 text-secondary text-center text-[17px] leading-[30px] max-w-3xl"
        >
          {text}
        </motion.div>

        <div className="sm:hidden text-secondary text-center text-[17px] leading-[30px] max-w-3xl">
          {text}
        </div>
      </div>
    ) : null}
  </>
);

export default SectionTitle;
