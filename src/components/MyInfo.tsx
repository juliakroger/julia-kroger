import { motion } from "framer-motion";
import { styles } from "@/styles/styles";
import Typewriter from "@/components/Typewriter";
import EarthCanvas from "@/components/canvas/Earth";

const MyInfo = () => (
  <section className="relative w-full h-screen">
    <div
      className={`absolute inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-row justify-center items-center gap-12`}
    >
      <div className="w-[520px]">
        <h1 className={`${styles.headText} text-white`}>
          Hello, I'm <br />
          <Typewriter
            text="Júlia Kroger"
            delay={120}
            className="text-[#915EFF]"
          ></Typewriter>
        </h1>
        <p className={`${styles.subText} mt-2 text-white-100`}>
          I'm a Fullstack Developer, with over 5 years of professional
          experience.
        </p>

        <div className="grid grid-cols-3 mt-6 divide-x gap-4">
          <a
            href="https://www.instagram.com/jukroger"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer flex justify-center items-center"
          >
            <svg
              className="w-6 h-6"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          <a
            href="https://github.com/juliakroger"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer flex justify-center items-center"
          >
            <svg
              className="w-8 h-8"
              strokeWidth="2"
              fill="currentColor"
              viewBox="0 0 30 30"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/juliakroger/"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer flex justify-center items-center"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>

      <div className="w-full md:w-[450px] md:h-[550px] lg:flex hidden">
        <EarthCanvas />
      </div>
    </div>

    <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
      <a href="#about">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
      </a>
    </div>
  </section>
);

export default MyInfo;
