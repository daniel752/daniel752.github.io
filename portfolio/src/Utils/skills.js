import { TbBrandCpp } from "react-icons/tb";
import { BiLogoMongodb, BiLogoReact, BiLogoJavascript } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC } from "@fortawesome/free-solid-svg-icons";

import {
  FaNodeJs,
  FaJava,
  FaPython,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaUnity,
  FaGithub,
  FaGitAlt,
  FaJenkins,
  FaDocker,
  FaLinux,
  FaWindows,
} from "react-icons/fa";
import { MdOutlineSoupKitchen } from "react-icons/md";
import {
  SiExpress,
  SiJquery,
  SiFirebase,
  SiMongoose,
  SiGithubactions,
  SiKubernetes,
  SiVmware,
  SiVirtualbox,
  SiGodotengine,
  SiSelenium,
} from "react-icons/si";

const skills = [
  {
    title: "Programming Languages",
    icons: [
      {
        name: "C",
        image: "/assets/images/icons8-c-programming-120.png",
      },
      { name: "C++", image: "/assets/images/icons8-c-120.png" },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <BiLogoJavascript /> },
    ],
  },
  {
    title: "Front-End",
    icons: [
      { name: "React", icon: <BiLogoReact /> },
      // { name: "JavaScript", icon: <BiLogoJavascript /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "jQuery", icon: <SiJquery /> },
    ],
  },
  {
    title: "Back-End",
    icons: [
      { name: "NodeJS", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <BiLogoMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Mongoose", icon: <SiMongoose /> },
    ],
  },
  {
    title: "CI / CD",
    icons: [
      { name: "Actions", icon: <SiGithubactions /> },
      { name: "Jenkins", icon: <FaJenkins /> },
    ],
  },
  {
    title: "Containerization / Virtualization",
    icons: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "VMware", icon: <SiVmware /> },
      { name: "VirtualBox", icon: <SiVirtualbox /> },
    ],
  },
  {
    title: "Version Control",
    icons: [
      { name: "Github", icon: <FaGithub /> },
      { name: "Git", icon: <FaGitAlt /> },
    ],
  },
  {
    title: "Game Development",
    icons: [
      { name: "Unity", icon: <FaUnity /> },
      // { name: "Godot", icon: <SiGodotengine /> },
    ],
  },
  {
    title: "OS",
    icons: [
      { name: "Linux", icon: <FaLinux /> },
      { name: "Windows", icon: <FaWindows /> },
    ],
  },
];

export default skills;
