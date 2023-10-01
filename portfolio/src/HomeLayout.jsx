import { Contact, Header, Landing, Portfolio, Skills } from "./components";
import { Section } from "./components";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <div className="resume-container">
        <a
          className="resume-btn"
          href="https://drive.google.com/file/d/16dZnnYpCOkNUp-SmHDayjQSNhKq0wo8v/view?usp=sharing"
          target="_blank"
        >
          View Resume
        </a>
        <a
          className="resume-btn"
          href="https://drive.google.com/uc?export=download&id=16dZnnYpCOkNUp-SmHDayjQSNhKq0wo8v"
          download="Daniel Arbiv.pdf"
          target="_blank"
        >
          Download Resume
        </a>
      </div>
      <div className="sections">
        <Section id="home" children={<Landing />} isPredecessor />
        <Section
          id="skills"
          title="skills"
          children={<Skills />}
          isPredecessor
        />
        <Section
          id="projects"
          title="projects"
          children={<Portfolio />}
          isPredecessor
        />
        <Section id="contact" title="contact" children={<Contact />} />
      </div>
    </>
  );
};

export default HomeLayout;
