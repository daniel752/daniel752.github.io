import { BiLogoMongodb, BiLogoReact, BiLogoJavascript } from "react-icons/bi";

import {
  FaNodeJs,
  FaJava,
  FaPython,
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

import {
  SiExpress,
  SiFirebase,
  SiMongoose,
  SiGithubactions,
  SiKubernetes,
  SiVmware,
  SiVirtualbox,
  SiSelenium,
  SiGnubash,
  SiQt,
  SiOpengl,
} from "react-icons/si";

const skills = [
  {
    title: "Programming Languages",
    icons: [
      { name: "C", image: "/assets/images/icons8-c-programming-120.png" },
      { name: "C++", image: "/assets/images/icons8-c-120.png" },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <BiLogoJavascript /> },
    ],
  },
  {
    title: "Scripting Languages",
    icons: [
      { name: "Bash", icon: <SiGnubash /> },
    ]
  },
  {
    title: "Web Development",
    icons: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "React", icon: <BiLogoReact /> },
      { name: "NodeJS", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <BiLogoMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Mongoose", icon: <SiMongoose /> },
    ],
  },
  {
    title: "Native Development",
    icons: [
      { name: "Qt", icon: <SiQt /> },
    ]
  },
  {
    title: "Automation",
    icons: [
      { name: "Selenium", icon: <SiSelenium /> },
    ]
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
    title: "Graphics and Visualization",
    icons: [
      { name: "OpenGL", icon: <SiOpengl /> },
    ]
  },
  {
    title: "Game Development",
    icons: [
      { name: "Unity", icon: <FaUnity /> },
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
