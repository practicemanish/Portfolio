const Projects = () => {
  const projects = [
    {
      title: "Restaurant Website",
      description:
        "Swiggy-inspired web app with restaurant listings, menus, search & filter functionality. Built using React.js, Redux Toolkit, Tailwind CSS, and Jest for testing.",
      tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "Jest"],
      demoLink: "https://your-restaurant-app.vercel.app",
      githubLink: "https://github.com/yourusername/restaurant-website",
    },
    {
      title: "Weather App",
      description:
        "Real-time weather application fetching data from OpenWeather API. Styled with Tailwind CSS and Material UI for a modern responsive design.",
      tech: ["React.js", "Tailwind CSS", "OpenWeather API"],
      demoLink: "https://your-weather-app.vercel.app",
      githubLink: "https://github.com/yourusername/weather-app",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website to showcase projects and skills with smooth navigation and responsive design.",
      tech: ["React.js", "Tailwind CSS", "React Router"],
      demoLink: "https://your-portfolio.vercel.app",
      githubLink: "https://github.com/yourusername/portfolio",
    },
    
  ];

  return (
    <div className="flex max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>

        <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-2xl border hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-200 text-sm rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 font-medium hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
