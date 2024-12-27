import React from "react";
import Baner from "../../assets/bg-banner3.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/Animation";

const bgStyle = {
    backgroundImage: `url(${Baner})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}

const Banner3 = () => {
  return (
    <>
      <section >
        <div style={bgStyle} className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl">
          {/* Banner Image */}
          <div></div>
          {/* Brand Image */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
              <motion.h1
                variants={FadeLeft(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl lg:text-6xl font-bold uppercase"
              >
                Get Fresh Fruits Today
              </motion.h1>
              <motion.p
                variants={FadeLeft(0.7)}
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
              <motion.div
                variants={FadeLeft(0.9)}
                initial="hidden"
                animate="visible"
                className="flex justify-center md:justify-start"
              >
                <button className="primary-btn">Order Now</button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner3;
