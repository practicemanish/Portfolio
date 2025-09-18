import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped, Typed } from "react-typed";


const Home = () => {
  return (
    <>
      <div className="flex max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 ">
        <div className="flex flex-col md:flex-row items-center md:items-start ">
          <div className="md:w-1/2 mt-12 md:mt-20 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In my Feed</span>
            <div className="flex items-center space-x-2 text-2xl md:text-4xl font-bold">
              <h1>Hello, I am a </h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped
                className="text-red-700"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Aspiring Software Engineer with a strong foundation in
              programming, data structures, and web development. Skilled in
              JavaScript, React, Next.js, Node.js, and working with APIs and
              databases. A problem solver, quick learner, team player, and
              passionate about building real-world tech solutions. Looking for
              opportunities to grow and contribute to impactful projects.
            </p>
            <br />
            {/* {social media icons} */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              {/* Left Section */}
              <div className="space-y-2">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5 text-2xl">
                  <a href="https://www.facebook.com/" target="_Blank">
                  <li className="cursor-pointer">
                    <FaFacebook />
                  </li>
                  </a>
                   <a href="https://www.linkedin.com/" target="_Blank">
                  <li className="cursor-pointer">
                    <FaLinkedin />
                  </li>
                 </a>
                  <a href="https://x.com/" target="_Blank">
                  <li className="cursor-pointer">
                    <FaSquareXTwitter />
                  </li>
                  </a>
                   <a href="https://www.github.com/" target="_Blank">
                  <li className="cursor-pointer">
                    <FaGithubSquare />
                  </li>
                  </a>
                </ul>
              </div>

              {/* Right Section */}
              <div className="space-y-2">
                <h1 className="font-bold">Currently working on</h1>
                <div className="flex space-x-5 text-3xl">
                  <DiMongodb />
                  <RiReactjsFill />
                  <SiExpress />
                  <FaNodeJs />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 ">
          <img src="/photo.avif" className="rounded-full md:w-[450px] md:h-[450px]" alt="photo" />
          
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
