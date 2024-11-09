import { skillsData } from "../Constants/constants";
import { motion } from "framer-motion";
export default function Tape() {
  return (
    <div className="px-10  mt-10 container">
      <motion.div
        animate={{
          x: [-184, -1850],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="p-2 w-max flex  gap-6  whitespace-nowrap overflow-x-clip "
      >
        {skillsData.concat(skillsData).map((item, index) => (
          <div
            key={index}
            className="flex gap-1 cursor-pointer bg-white shadow-lg px-3 py-1 items-center rounded-md  shadow-gray-300 hover:-rotate-3 "
          >
            <img src={item.image} alt={item.name} className="size-8" />
            <p>{item.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
