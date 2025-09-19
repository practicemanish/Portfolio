import { motion } from "framer-motion";
import profilePic from "../assets/manish.jpg"; // 👈 replace with your photo path

const About = () => {
    
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white shadow-lg rounded-2xl p-8 md:p-12"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <img
            src={profilePic}
            alt="Manish Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg border-4 border-green-500 object-cover"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6 text-gray-800 text-center"
        >
          About Me
        </motion.h1>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 leading-relaxed mb-8 text-center md:text-left"
        >
          I am <span className="font-semibold text-gray-800">Manish</span>, a{" "}
          <span className="text-green-600 font-medium">
            B.Tech Computer Science
          </span>{" "}
          graduate from IK Gujral Punjab Technical University (June 2025). My
          passion lies in crafting innovative and efficient{" "}
          <span className="font-medium">full-stack applications</span>. <br />
          <br />
          Currently, I am working as a{" "}
          <span className="font-medium">Software Developer Intern</span> at
          RunFly Pvt. Ltd., where I continue to sharpen my problem-solving and
          development skills. With a strong foundation in{" "}
          <span className="font-medium">OOP, Data Structures & Algorithms</span>{" "}
          and hands-on experience in{" "}
          <span className="font-medium">modern web technologies</span>, I thrive
          in collaborative environments and enjoy tackling challenging problems.
        </motion.p>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            🎓 Education & Training
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            <li>
              <span className="font-semibold">
                IK Gujral Punjab Technical University
              </span>{" "}
              – B.Tech in Computer Science (7.7 CGPA) <br />
              <span className="text-sm text-gray-500">
                2021 – 2025 | Kapurthala
              </span>
            </li>
            <li>
              <span className="font-semibold">St. George Prep. School</span> –
              Senior Secondary (84%) <br />
              <span className="text-sm text-gray-500">
                2018 – 2020 | Varanasi
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            💻 Technical Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-medium text-gray-800">Programming</h3>
              <p>JavaScript, React, Redux, Java, C++, OOPs</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Web Development</h3>
              <p>React.js, Node.js, TailwindCSS, Framer Motion, HTML, CSS</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Design & Security</h3>
              <p>System Design, Architecture, Computer Networks</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Tools</h3>
              <p>Git, Android Studio, Visual Studio, Eclipse</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
