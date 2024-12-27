import React from "react";
import Baner from "../../assets/tray.jpg";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/Animation";

const Banner2 = () => {
  return (
    <>
      <section className="container mb-12">
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
          {/* Banner Image */}
         
          {/* Brand info */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
              <motion.h1
                variants={FadeUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl lg:text-6xl font-bold uppercase"
              >
                Online Food Store
              </motion.h1>
              <motion.p
                variants={FadeUp(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Fruits are important sources of dietary fibre, vitamins
                (especially vitamin C), and antioxidants. Although fresh fruits
                are subject to spoilage, their shelf life can be extended by
                refrigeration or by the removal of oxygen from their storage or
                packaging containers.
              </motion.p>
              <motion.p
                variants={FadeUp(0.9)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                The concept of “fruit” is based on such an odd mixture of
                practical and theoretical considerations that it accommodates
                cases in which one flower gives rise to several fruits.
              </motion.p>
              <motion.div
                variants={FadeUp(1.1)}
                initial="hidden"
                animate="visible"
                className="flex justify-center md:justify-start"
              >
                <button className="primary-btn">Download for App</button>
              </motion.div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75}}
            whileInView={{ opacity: 1, x: 0, rotate:0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true}}
              src={Baner}
              alt=""
              className="w-[350px] md:max-w-[500px] h-full object-cover drop-shadow"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner2;
