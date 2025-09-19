// import React from "react";
import { motion } from "framer-motion";

// Import your skill logos (make sure these paths are correct)
import html from "../assets/HTML5.png";
import css from "../assets/CSS3.png";
import javascript from "../assets/JavaScript.png";
import reactjs from "../assets/React.png";
import nodejs from "../assets/Node.png";
import mongodb from "../assets/MongoDb.png";

const Experience = () => {
  const cardItem = [
    { id: 1, logo: html, name: "HTML5" },
    { id: 2, logo: css, name: "CSS3" },
    { id: 3, logo: javascript, name: "JavaScript" },
    { id: 4, logo: reactjs, name: "React.js" },
    { id: 5, logo: nodejs, name: "Node.js" },
    { id: 6, logo: mongodb, name:"MongoDb"},
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <h1 className="text-3xl font-bold mb-10 text-center">Experience</h1>
      <p className="font-semibold m-2 p-2">
        I have more than 1 year of Experience in below technologies.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {cardItem.map(({ id, logo, name }) => (
          <motion.div
            key={id}
            className="flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg bg-white hover:shadow-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={logo} alt={name} className="w-20 h-20 mb-4" />
            <h2 className="text-lg font-semibold">{name}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
