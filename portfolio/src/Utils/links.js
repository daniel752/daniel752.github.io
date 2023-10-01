import { GrProjects } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { AiFillHome, AiFillQuestionCircle } from "react-icons/ai";
import { MdContentPasteSearch, MdMiscellaneousServices } from "react-icons/md";

const links = [
  { text: "home", path: "#home", icon: <AiFillHome /> },
  { text: "skills", path: "#skills", icon: <GiSkills /> },
  { text: "projects", path: "#projects", icon: <GrProjects /> },
  { text: "contact", path: "#contact", icon: <IoMdContact /> },
  // { text: "resume", path: "#resume", icon: <MdContentPasteSearch /> },
  // { text: "services", path: "#services", icon: <MdMiscellaneousServices /> },
  // { text: "about", path: "#about", icon: <AiFillQuestionCircle /> },
];

export default links;
