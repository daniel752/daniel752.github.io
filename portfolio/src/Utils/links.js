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
    path: "https://drive.google.com/drive/u/0/folders/1v96C0luFU8km9a5H6iNgaHC95g4Xpfk_",
    icon: <RiArticleFill />,
    isNewWindow: true,
  },
];

export default links;
