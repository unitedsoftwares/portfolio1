import { educationData, experienceData } from "../Constants/constants";
import { assets } from "../assets/icons/assets";
import Avatar from "../assets/images/memoji-smile.png";
import Location from "../assets/images/Location.png";
import Tape from "../Components/Tape";
import { motion } from "framer-motion";
import { SlideLeft } from "../Utility/animation";
export default function Resume() {
  return (
    <section className="section container">
      <div className="relative mb-6">
        <img src={assets.Dots} className="size-8  " />
        <h1 className="heading ">Resume</h1>
      </div>
      <div className="sm:container grid xl:grid-cols-2 xl:grid-rows-[0.7fr_1.7fr] gap-4 ">
        <motion.div
          variants={SlideLeft(0.5)}
          initial="hidden"
          whileInView={"visible"}
          className="card pt-4  sm:pl-5 px-2 row-span-2"
        >
          {educationData.map((item, index) => (
            <div className="element-line" key={index}>
              <img
                src={item.image}
                alt=""
                className="size-7 absolute left-0 bg-white"
              />

              <p className="text-gray-400 ">{item.duration}</p>
              <p className="font-semibold text-lg">{item.course}</p>
              <p>{item.name}</p>
              <p>
                Percentage -<span>{item.percentage}</span>
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={SlideLeft(0.7)}
          initial="hidden"
          whileInView={"visible"}
          className="card pt-4 sm:pl-5 pl-2  "
        >
          {experienceData.map((item, index) => (
            <div className="element-line" key={index}>
              <img
                src={item.image}
                alt=""
                className="size-7 absolute left-0 bg-white"
              />
              <p className="text-gray-400 ">{item.duration}</p>
              <p className="font-semibold text-lg">{item.course}</p>
              <p>{item.name}</p>
            </div>
          ))}
        </motion.div>
        <motion.div
          variants={SlideLeft(0.9)}
          initial="hidden"
          whileInView={"visible"}
          className="card p-4 relative "
        >
          <div
            className="absolute top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2"
          >
            <div className="bg-green-500 absolute inset-0 -z-20 rounded-full size-14 animate-ping [animation-duration:2s] "></div>
            <div className="bg-gradient-to-bl to-green-300 from-green-300 absolute inset-0 -z-10 rounded-full size-14"></div>
            <a href="https://maps.app.goo.gl/wHG2Q4UnttE4mgR7A" target="_blank">
              <img src={Avatar} alt="" className=" size-14 " />
            </a>
          </div>

          <img
            src={Location}
            alt=""
            className="object-cover w-full h-[207px] "
          />
        </motion.div>
      </div>

      <Tape />
    </section>
  );
}
