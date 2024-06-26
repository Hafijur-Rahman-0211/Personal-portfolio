import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Hafijur.png";
import { motion } from "framer-motion";
import Resume from "../assets/Hafijur_cv.pdf";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Hafijur Rahman
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-2xl bg-gradient-to-r from-red-500 via-slate-600 to-purple-800 bg-clip-text tracking-tight text-transparent"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <div className="py-2">
              <a
                href={Resume}
                download="Hafijur_Resume.pdf"
                className="w-6 h-6 md:w-8 md:h-8"
              >
                <button className="px-1 inline-block py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-400 via-purple-300 text-white mb-4">
                  <span className="block bg-zinc-800 hover:bg-purple-800 rounded-full px-5 py-4">
                    {""}
                    Download Resume
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-2">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              width={400}
              height={400}
              className="rounded-2xl"
              alt="Hafijur Rahman"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
