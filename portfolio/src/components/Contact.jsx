import Wrapper from "../wrappers/Contact";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { IconContext } from "react-icons";
import IconLink from "./IconLink";

const Contact = () => {
  return (
    <Wrapper>
      <div className="contact-card">
        <h3 className="title">Want to get in touch?</h3>
        <p>We can always get in touch by email at danielarbiv752@gmail.com </p>
        <p>Or if you are looking for another way to get in touch</p>
        <div className="icons-row">
          <IconContext.Provider value={{ size: 100 }}>
            <IconLink
              icon={<AiFillLinkedin />}
              href="https://linkedin.com/in/dsa12"
              target="_blank"
            />
            <IconLink
              icon={<AiFillGithub />}
              href="https://github.com/daniel752"
              target="_blank"
            />
            <IconLink
              icon={<AiFillFacebook />}
              href="https://www.facebook.com/daniel.arbiv"
              target="_blank"
            />
            <IconLink
              icon={<IoLogoWhatsapp />}
              href="https://wa.me/972543443752"
              target="_blank"
            />
          </IconContext.Provider>
        </div>
      </div>
    </Wrapper>
  );
};
export default Contact;
