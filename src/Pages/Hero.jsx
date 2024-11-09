import React from "react";
import { motion } from "framer-motion";
import Profile from "../assets/images/memoji-computer.png";
import Sparkle from "../assets/icons/sparkle.svg";
import Star from "../assets/icons/star.svg";
import { rotateAnimation } from "../Utility/animation";
export default function Hero() {
  return (
    <>
      <div className="py-28 sm:py-36 flex items-center justify-center h-screen   overflow-y-clip relative  ">
        <motion.div
          variants={rotateAnimation(40)}
          initial="start"
          animate="end"
          className="size-[620px] hero-ring p-8"
        >
          <div className="ring-div ">
            <motion.img
              variants={rotateAnimation(5)}
              initial="start"
              animate="end"
              src={Star}
              alt=""
              className="size-6 absolute top-48 left-4 opacity-50 "
            />

            <motion.img
              variants={rotateAnimation(5)}
              initial="start"
              animate="end"
              src={Sparkle}
              alt=""
              className="size-4 opacity-50 absolute right-40 top-6"
            />
          </div>
        </motion.div>
        <motion.div
          variants={rotateAnimation(40)}
          initial="start"
          animate="end"
          className="size-[820px] hero-ring "
        >
          <div className="ring-div ">
            <motion.img
              variants={rotateAnimation(10)}
              initial="start"
              animate="end"
              src={Star}
              alt=""
              className="size-10 absolute top-20 left-52 opacity-80 "
            />
            <motion.img
              variants={rotateAnimation(10)}
              initial="start"
              animate="end"
              src={Star}
              alt=""
              className="size-6 opacity-80 absolute top-36 right-24"
            />
            <div className="dot bottom-96  left-10 "></div>
          </div>
          <motion.img
            variants={rotateAnimation(10)}
            initial="start"
            animate="end"
            src={Sparkle}
            alt=""
            className="size-8 opacity-20 absolute bottom-52 right-28  "
          />
        </motion.div>
        <motion.div
          variants={rotateAnimation(40)}
          initial="start"
          animate="end"
          className="size-[1020px] hero-ring"
        >
          <div className="ring-div">
            <motion.img
              variants={rotateAnimation(10)}
              initial="start"
              animate="end"
              src={Star}
              alt=""
              className="size-20 bottom-56 left-24 absolute opacity-90 "
            />

            <motion.img
              variants={rotateAnimation(10)}
              initial="start"
              animate="end"
              src={Sparkle}
              alt=""
              className="size-8 opacity-20 absolute top-1/2 right-2"
            />
            <motion.img
              variants={rotateAnimation(10)}
              initial="start"
              animate="end"
              src={Star}
              alt=""
              className="size-12 bottom-36 left-1/2 absolute opacity-20 "
            />
            <div className="dot  right-2 top-72"></div>
          </div>
        </motion.div>

        <div className="container z-50  ">
          <div className="flex flex-col items-center  z-10">
            <img src={Profile} alt="Profile_pic" className="size-36" />
            <div className="flex items-center  gap-2.5 bg-gray-800 text-white px-3.5 py-0.5 rounded-md">
              <div className="bg-green-500 size-2.5 rounded-full ">
                <div className="bg-green-500 size-2.5 rounded-full animate-ping inset-0 "></div>
              </div>
              <p>Web Developer #MERN</p>
            </div>
          </div>

          <div className="max-w-lg text-center mx-auto my-2">
            <h1 className="sm:text-4xl  text-2xl font-semibold  mx-6 sm:mx-12">
              Building Exceptional User Experience
            </h1>
            <p className="font-normal">
              I specalize in transforming designs into functional ,
              high-performing web applications. Let's discuss your next project
            </p>
          </div>

          <div className="flex justify-center   items-center my-4">
            <a
              href="https://www.linkedin.com/in/piraisudan2003/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white text-black px-3.5 py-1.5 font-medium  rounded-md drop-shadow-md shadow-md"
              >
                <span>👋</span> Let's connect
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
