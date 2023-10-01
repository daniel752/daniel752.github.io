import { useEffect, useState } from "react";
import typeWriter from "../Utils/typeWriter";
import Wrapper from "../wrappers/Landing";

const titleText = "Hello! I'm Daniel Arbiv";
const paragraph =
  "Hello there, I'm Daniel Arbiv, a 30-year-old software enthusiast hailing from the vibrant landscape of Israel. Fresh off the academic stage with a recent Bachelor's degree in Software Engineering, I'm here to share my passion and skills with you. I'm a versatile developer, comfortable with both front-end and back-end technologies, making me a full-stack powerhouse. My journey through the world of software has taken me from the intriguing realms of game development to the fascinating field of cybersecurity. But, beyond the coding and programming, there's a lot more to me. As a true gamer, I spent my childhood exploring virtual worlds and honing my strategic skills. When I'm not immersed in code, you'll often find me enjoying quality time with friends or indulging in a Netflix binge, complete with a tub of Ben & Jerry's ice cream in hand. Welcome to my portfolio, where technology meets creativity, and where we can embark on exciting tech adventures together. Feel free to explore, and let's connect to turn innovative ideas into reality.";
const typingSpeed = 20; // Miliseconds

const Landing = () => {
  const [isTitleTyped, setIsTitleTyped] = useState(false);

  useEffect(() => {
    if (!isTitleTyped) {
      typeWriter("title-typing", titleText, typingSpeed, () => {
        setIsTitleTyped(true);
      });
    } else {
      typeWriter("paragraph-typing", paragraph, typingSpeed);
    }
  }, [isTitleTyped]);

  return (
    <Wrapper>
      <div className="landing-container">
        <h3 id="title-typing"></h3>
        <p id="paragraph-typing"></p>
      </div>
    </Wrapper>
  );
};
export default Landing;
