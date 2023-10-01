import projects from "../Utils/projects";
import ProjectContainer from "./ProjectContainer";
import Wrapper from "../wrappers/Portfolio";

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
      </div>
    </Wrapper>
  );
};
export default Portfolio;
