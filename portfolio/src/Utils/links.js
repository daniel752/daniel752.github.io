import { GrProjects } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { RiArticleFill } from "react-icons/ri";

const links = [
  { text: "home", path: "#home", icon: <AiFillHome />, isNewWindow: false },
  { text: "skills", path: "#skills", icon: <GiSkills />, isNewWindow: false },
  {
    text: "projects",
    path: "#projects",
    icon: <GrProjects />,
    isNewWindow: false,
  },
  {
    text: "contact",
    path: "#contact",
    icon: <IoMdContact />,
    isNewWindow: false,
  },
  {
    text: "resume",
    path: "https://drive.google.com/file/d/1vkLa-aMTixNxJDJqUUvtlA_eJrT-_EHe/view?usp=sharing",
    icon: <RiArticleFill />,
    isNewWindow: true,
  },
];

export default links;
