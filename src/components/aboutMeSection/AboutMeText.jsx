import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      Hello! I'm Vishvajeet, a passionate and driven entry-level web developer, 
      eager to embark on my journey in the digital world. I'm fascinated by the power
      of code to bring ideas to life and create engaging online experiences. 
      My focus is on building clean, efficient, and user-friendly web applications. 
      I'm a dedicated learner, constantly seeking to expand my knowledge and skills 
      in the ever-evolving landscape of web development. I'm excited to contribute 
      to innovative projects and grow alongside a dynamic team.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
