import Avatar from "../assets/images/memoji-smile.png";
import { assets } from "../assets/icons/assets";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../Utility/animation";
import { skills } from "../Constants/constants";
import Resume from "../assets/PDF/Piraisudan_MERN_Fresher.pdf";

export default function About() {
  return (
    <section className="section container sm:mb-8 ">
      <div className="relative mb-6">
        <img src={assets.Dots} className="size-8  " />
        <h1 className="heading ">About</h1>
      </div>
      <div className="grid gap-5 lg:grid-cols-[2.5fr_8fr] xl:container sm:gap-8 ">
        <motion.img
          variants={SlideRight(0.2)}
          initial="hidden"
          whileInView={"visible"}
          src={Avatar}
          alt=""
          className="size-40 bg-yellow-300 rounded-full m-auto"
        />
        <motion.div
          variants={SlideLeft(0.2)}
          initial="hidden"
          whileInView={"visible"}
          className="text-justify bg-white px-8 py-6 shadow-lg rounded-lg "
        >
          <p className="text-gray-3 leading-loose text-base">
            Hello! I'm <span className="text-black  ">Piraisudan,</span> a web
            developer. I am always curious about how modern technology works,
            which sparked my journey into learning web development. So, I
            learned through self-study and am committed to continuously learning
            and exploring new technologies to enhance my skills. I believe
            everything is simple once you understand the basics.
          </p>

          <a href={Resume} download="Piraisudan_MERN_Fresher_Resume.pdf">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="bg-red-600 px-3.5 py-1.5 my-2 rounded-lg text-white font-medium text-lg "
            >
              Download CV
            </motion.button>
          </a>
        </motion.div>
      </div>
      <motion.div
        variants={SlideUp(0.1)}
        initial="hidden"
        whileInView={"visible"}
        className="flex flex-col sm:flex-row gap-2 container justify-around mt-12 sm:mt-24 uppercase text-2xl whitespace-nowrap flex-wrap 
       font-semibold bona-nova-sc-regular"
      >
        {skills.map((items, idx) => (
          <motion.div
            key={idx}
            initial="initial"
            whileHover="hovered"
            className="overflow-hidden relative show-on-hover-device"
          >
            <motion.p
              className="absolute"
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
            >
              {items.split("").map((l, i) => (
                <motion.span className="" key={i}>
                  {l}
                </motion.span>
              ))}
            </motion.p>
            <motion.p
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
            >
              {items}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
