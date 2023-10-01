import { BiLogoMongodb, BiLogoReact, BiLogoJavascript } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { MdOutlineSoupKitchen } from "react-icons/md";

const projects = [
  {
    id: "1",
    title: "MarkdownZen",
    image: "/assets/images/markdown-zen-screenshot.png",
    description:
      "MarkdownZen is a web application designed to streamline the creation and management of markdown documents. With a user-friendly interface and powerful features, MarkdownZen is your go-to tool for a zenful markdown experience.",
    techStack: [
      { name: "MongoDB", icon: <BiLogoMongodb /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "React", icon: <BiLogoReact /> },
      { name: "Node", icon: <FaNodeJs /> },
    ],
    href: "https://markdown-zen.onrender.com/",
  },
  {
    id: "2",
    title: "BBIS Hide and Extract",
    image: "/assets/images/steganography-image.png",
    description:
      "BBIS Hide and Extract is a Python PoC (Proof-of-Concept) project designed to hide and extract data within executables using Binary-Based Instruction Substitution (BBIS) technique.",
    techStack: [
      { name: "Python", icon: <FaPython /> },
      {
        name: "Assembly x8086",
        image: "/assets/images/pngkey.com-white-glow-png-4794953.png",
      },
    ],
    href: "https://github.com/daniel752/BBIS",
  },
  {
    id: "3",
    title: "Accessibility Tester",
    image: "/assets/images/ben-sweet-2LowviVHZ-E-unsplash.jpg",
    description:
      "Accessibility Tester is a Python program designed to help website owners and developers test the accessibility of their sites. It checks every accessibility aspect of the site, including color contrast, font sizes, alternative text, and more.",
    techStack: [
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <BiLogoJavascript /> },
      { name: "BeautifulSoup", icon: <MdOutlineSoupKitchen /> },
    ],
    href: "https://github.com/daniel752/Accessibility-Tester",
  },
];

export default projects;
