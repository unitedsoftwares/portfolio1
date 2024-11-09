import { assets } from "../assets/icons/assets";
import { socialMedia } from "../Constants/constants";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "96486516-07da-4812-9d65-d9442fb3d3c6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <section className="section container lg:mt-32 mb-12">
        <div className="relative mb-6">
          <img src={assets.Dots} className="size-8  " />

          <h1 className="heading">Get In Touch</h1>
        </div>
        <div className="grid  lg:grid-cols-[0.7fr_1fr]">
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold mb-4 ml-3">
              Let's talk about everything
            </h1>
            <div className="flex gap-4 justify-around w-[70%] mb-8">
              {socialMedia.map((items) => (
                <a
                  href={items.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={items.label}
                >
                  <img
                    src={items.img}
                    alt={items.label}
                    className="size-10 hover:bg-gray-3 hover:bg-opacity-15 rounded-md p-1"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <form className="grid gap-7 px-3 " onSubmit={onSubmit}>
              <input
                type="hidden"
                name="access_key"
                value="96486516-07da-4812-9d65-d9442fb3d3c6"
              />
              <div className="max-w-xs ">
                <input
                  required
                  name="Name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-xl font-semibold "
                />
              </div>
              <div className="max-w-xs">
                <input
                  required
                  name="Contact"
                  type="text"
                  placeholder="Enter your contact"
                  className="w-full p-3 rounded-xl font-semibold"
                />
              </div>
              <div className="max-w-xs sm:max-w-full sm:col-span-2">
                <textarea
                  required
                  rows="5"
                  name="Message"
                  placeholder="Enter a message "
                  className="w-full p-3 rounded-xl font-semibold resize-none"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="bg-red-600 px-3.5 py-1.5 my-2 rounded-lg text-white font-medium text-lg w-fit"
              >
                Submit
              </motion.button>
              <span>{result}</span>
            </form>
          </div>
        </div>
      </section>

      <p className="text-center ">Copyright © 2024 Piraisudan R</p>
    </>
  );
}
