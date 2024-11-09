import { projectData } from "../Constants/constants";
import { assets } from "../assets/icons/assets";
import { motion } from "framer-motion";
export default function Projects() {
  return (
    <section className="section  container ">
      <div className="relative  mb-6">
        <img src={assets.Dots} className="size-8  " />
        <h1 className="heading ">Projects</h1>
      </div>
      <div className="grid gap-6 xl:gap-10 md:grid-cols-2 xl:grid-cols-3 mt-12">
        {projectData.map((items, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              stiffness: 100,
              delay: 0.3,
            }}
            key={index}
            className="card p-6 hover:drop-shadow"
          >
            <div>
              <motion.div
                initial="initial"
                whileHover="hovered"
                className="overflow-hidden relative hover:border-gray-2 hover:drop-shadow-xl rounded-md border"
              >
                <img
                  src={items.webImage}
                  alt=""
                  className="w-full h-[190px] lg:h-[250px] object-cover  object-left-top mx-auto cursor-pointer  rounded-md "
                />

                <motion.div
                  variants={{
                    initial: {
                      y: "100%",
                      transition: { duration: 0.3, ease: "easeInOut" },
                    },
                    hovered: {
                      y: 0,
                      transition: { duration: 0.3, ease: "easeInOut" },
                    },
                  }}
                  className="absolute -inset-0 text-center bg-gray-3 bg-opacity-65 flex gap-12 justify-center items-center"
                >
                  <a href={items.liveLink} target="_blank">
                    <img
                      src={items.liveImage}
                      className="link-button px-0.5 "
                    />
                  </a>
                  <a href={items.gitLink} target="_blank">
                    <img src={items.gitImage} className="link-button px-1" />
                  </a>
                </motion.div>
              </motion.div>
              <div className="flex flex-col space-y-1 mt-3">
                <div className="flex gap-2 items-center">
                  <h1 className="text-2xl font-semibold">{items.name}</h1>
                  <a href={items.gitLink} target="_blank" className="hide-hover">
                    <img
                      src={items.gitImage}
                      className="link-button border border-gray-3 px-1"
                    />
                  </a>
                </div>
                <div className="flex flex-wrap">
                  {items.tech.map((item, idx) => (
                    <p key={idx} className="mr-2 ">
                      {item}
                    </p>
                  ))}
                </div>
                {/* <p className="text-gray-3">{items.desc}</p> */}
              </div>
              <div className="mt-4 mx-auto w-fit hide-hover ">
                <a href={items.liveLink} target="_blank">
                  
                  <button className="border px-3 py-1 rounded-md drop-shadow   text-md  bg-gray-800 text-white flex items-center gap-2 ">
                    Visit Project
                    <img src={assets.LinkIcon} alt="" className="size-4" />
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
