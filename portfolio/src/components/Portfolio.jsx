import projects from "../Utils/projects";
import ProjectContainer from "./ProjectContainer";
import Wrapper from "../wrappers/Portfolio";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  return (
    <Wrapper>
      <div className="projects">
        {projects.map((project) => {
          return (
            <ProjectContainer
              key={project.title}
              title={project.title}
              image={project.image}
              description={project.description}
              techStack={project.techStack}
              href={project.href}
            />
          );
        })}
        <h3>You can view more of my projects on Github</h3>
        <a href="https://github.com/daniel752" target="_blank">
          <FaGithub className="git-icon" />
        </a>
      </div>
    </Wrapper>
  );
};
export default Portfolio;
