import links from "../Utils/links";
import NavLink from "./NavLink";

const NavLinks = () => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        return (
          <NavLink
            id={link.text}
            to={link.path}
            key={link.text}
            icon={link.icon}
            text={link.text}
          ></NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
