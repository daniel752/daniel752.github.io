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
      "MarkdownZen, a project I spearheaded, demonstrates my experience in full-stack development. It's a comprehensive, multi-page web application designed to simplify Markdown document (.md) creation, organization, and collaborative editing. The app employs JWT-based user authentication with HTTP-only cookies and user input sanitization using middleware for enhanced security. Efficient proxy setup facilitates seamless communication between the frontend and backend, while Git integration ensures effective version control for the application itself. MarkdownZen serves as a testament to my skill set in modern web technologies and user-focused application design.",
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
      "This project serves as a Proof of Concept (PoC) demonstrating a novel steganography technique. It showcases the ability to hide a file within an executable without compromising its functionality. By replacing assembly instructions with equivalent ones based on binary input, the program successfully encodes binary data within the executable file.",
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
    image: "/assets/images/accessibility-tester-screenshot.png",
    description:
      "Accessibility Tester is a Python GUI program designed to help website owners and developers test the accessibility of their sites. It checks every accessibility aspect of the site, including color contrast, font sizes, alternative text, and more. The GUI was implemented using Tkinter, and accessibility tests were implemented using BeautifulSoup, an HTML/XML parser, and the automation tool Selenium.",
    techStack: [
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <BiLogoJavascript /> },
      { name: "BeautifulSoup", icon: <MdOutlineSoupKitchen /> },
    ],
    href: "https://github.com/daniel752/Accessibility-Tester",
  },
];

export default projects;
