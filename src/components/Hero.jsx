import { motion } from "framer-motion";
import { styles } from "../styles";
import PerspectiveText from "../components/PerspectiveText/PerspectiveText";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section
      className={`relative w-full min-h-screen md:rounded-b-3xl shadow-2xl ring-1 ring-gray-900/10 flex justify-start md:items-center items-end`}
      style={{
        backgroundImage: "url('/ruwi.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start sm:items-start justify-end sm:justify-start gap-5 pb-10 sm:pb-0`}
      >
        <div className='flex flex-col justify-center items-center mt-5 sm:mt-5'>
          <div className='w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-52 violet-gradient' />
        </div>

        <motion.div
          className="absolute z-10 flex flex-col text-white mx-5 md:mx-8 lg:mx-12 my-3 gap-4 md:gap-6 xl:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div>
            <h1
              className={`${styles?.heroHeadText ?? 'text-4xl font-bold'} text-white relative z-10`}
              style={{
                textShadow: '2px 4px 12px rgba(0, 0, 0, 0.5)' // Transparent drop shadow
              }}
            >
              Hi, I'm{' '}
              <span className="text-[#915EFF]">
                <PerspectiveText />
              </span>
            </h1>

            <p className={`${styles?.heroSubText ?? 'text-lg'} mt-2 text-white text-opacity-80`} 
            style={{
                textShadow: '2px 4px 12px rgba(0, 0, 0, 0.5)' // Transparent drop shadow
              }}
            >
              Full-stack dev & graphic designer <br className="sm:block hidden" />
              Cybersecurity Explorer
            </p>

            {/* Resume Button with Matching Font */}
            <a href="Ruwina Ranasinghe CV.pdf" download="RuwinaRanasinghe-Resume.pdf">
              <button className="cursor-pointer flex items-center justify-between bg-gradient-to-l from-blue-500 to-purple-600 px-4 py-2 rounded-full text-white tracking-wider shadow-xl hover:from-purple-500 hover:to-blue-600 hover:scale-105 duration-500 hover:ring-1 mt-3 sm:mt-0 md:mt-6 lg:mt-10 w-fit text-[16px] sm:text-[18px] font-normal">
                Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 ml-2 animate-bounce"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                  />
                </svg>
              </button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute bottom-1 left-0 w-full flex justify-center items-center">
  <motion.div
    className="z-10 flex flex-col text-white mx-3 sm:mx-5 md:mx-8 lg:mx-12 my-2 gap-3 sm:gap-4 md:gap-6 xl:gap-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 1 }}
  >
    <a href="#about">
      <div className="w-[23px] h-[42px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-1 sm:p-2">
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white mb-1"
        />
      </div>
    </a>
  </motion.div>
</div>

    </section>
  );
};

export default Hero;
