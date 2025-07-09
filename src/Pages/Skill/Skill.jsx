import React from "react";
import { FaHtml5, FaGithub, FaCss3Alt, FaReact, FaNode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiReactrouter } from "react-icons/si";
import { IoLogoFirebase, IoLogoFigma } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";

const Skill = () => {
  const skills = [
    { name: "HTML5", color: "#E34F26", icon: <FaHtml5 size={50} /> },
    { name: "CSS3", color: "#1572B6", icon: <FaCss3Alt size={50} /> },
    {
      name: "Tailwind CSS",
      color: "#38B2AC",
      icon: <RiTailwindCssFill size={50} />,
    },
    { name: "Github", color: "white", icon: <FaGithub size={50} /> },
    { name: "JavaScript", color: "#F7DF1E", icon: <SiJavascript size={50} /> },
    { name: "React", color: "#61DAFB", icon: <FaReact size={50} /> },
    {
      name: "React Router",
      color: "#CA4245",
      icon: <SiReactrouter size={50} />,
    },
    { name: "Firebase", color: "#FFCA28", icon: <IoLogoFirebase size={50} /> },
    { name: "MongoDB", color: "#47A248", icon: <DiMongodb size={50} /> },
    { name: "Figma", color: "#F24E1E", icon: <IoLogoFigma size={50} /> },
    { name: "Node JS", color: "#339933", icon: <FaNode size={50} /> },
  ];

  const topSkills = skills.slice(0, 8);
  const bottomSkills = skills.slice(8);

  return (
    <div id="experience" className="flex flex-col items-center  w-full">
      {/* First 8 skills  */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 lg:gap-2 w-full max-w-7xl">
        {topSkills.map((skill, index) => (
          <div className="avatar" key={index}>
            <div className="ring-primary ring-offset-base-100 w-27 sm:w-28 md:w-24 lg:w-24 rounded-full ring-2 ring-offset-2 flex flex-col justify-center items-center">
              <div className="justify-center items-center ml-6 mt-3">
                {React.cloneElement(skill.icon, { color: skill.color })}
              </div>
              <h2 className="text-sm sm:text-base">{skill.name}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Next 3 skills  */}
      <div className="flex justify-center mt-8 w-full max-w-3xl ">
        <div className="grid grid-cols-2 gap-x-10 md:grid-cols-3 gap-3 gap-y-3 ">
          {bottomSkills.map((skill, index) => (
            <div className="avatar" key={index}>
              <div className="ring-primary ring-offset-base-100 w-27 sm:w-20 md:w-24 lg:w-24 rounded-full ring-2 ring-offset-2 flex flex-col justify-center items-center">
                <div className="justify-center items-center ml-6 mt-3">
                  {React.cloneElement(skill.icon, { color: skill.color })}
                </div>
                <h2 className="text-sm sm:text-base">{skill.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
