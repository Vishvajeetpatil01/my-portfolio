import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Python Development",
    company: "The Website Makers",
    date: "06/2023 - 07/2023",
    responsibilities: [
      "Python Developer Intern with experience in Django, Flask, and REST APIs. Passionate about clean code, automation, and problem-solving. Skilled in databases, Git, and cloud platforms. Eager to learn and innovate. ",
    ],
  },
  
  {
    job: "Web Application Developer",
    company: "Webisoftech, Kolhapur",
    date: "06/2024 - 08/2024",
    responsibilities: [
      "•	Worked as a Web Application Developer at Webisoftech, Kolhapur, developing and deploying scalable web applications, enhancing functionality, and ensuring optimal performance across diverse projects.",
    ],
  },
  
  {
    job: "Web Development (.Net)",
    company: "Revolution IT Solutions, Kolhapur",
    date: "10/2024-08/2024",
    responsibilities: [
      "Completed Full Web Development Training gaining hands-on experience in building dynamic web applications, database integration, and deploying solutions using the .NET framework.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
