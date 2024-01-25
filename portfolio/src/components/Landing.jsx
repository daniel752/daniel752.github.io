import { useEffect, useState } from "react";
import typeWriter from "../Utils/typeWriter";
import Wrapper from "../wrappers/Landing";
import paragraph from "../Utils/text";

// const titleText = "Hello! I'm Daniel Arbiv";
// const paragraph =
  // "A 30-year-old software enthusiast hailing from the vibrant landscape of Israel. Fresh off the academic stage with a recent Bachelor's degree in Software Engineering, I'm here to share my passion and skills with you. I'm a versatile software, through the years i've learned the basics of a few field until i've found the one for me. I've tried at the";
const typingSpeed = 20; // Miliseconds

const Landing = () => {
  const [isTitleTyped, setIsTitleTyped] = useState(false);

  useEffect(() => {
    // if (!isTitleTyped) {
    //   typeWriter("title-typing", titleText, typingSpeed, () => {
    //     setIsTitleTyped(true);
    //   });
    // } else {
    typeWriter("paragraph-typing", paragraph, typingSpeed);
    // }
  }, [isTitleTyped]);

  return (
    <Wrapper>
      <div className="landing-container">
        {/* <h3 id="title-typing"></h3> */}
        <p id="paragraph-typing"></p>
      </div>
    </Wrapper>
  );
};
export default Landing;
