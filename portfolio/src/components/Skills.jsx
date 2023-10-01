import skills from "../Utils/skills";
import SkillCard from "./SkillCard";
import Wrapper from "../wrappers/Skills";

const Skills = () => {
  return (
    <Wrapper>
      {skills &&
        skills.map((skill) => {
          return (
            <SkillCard
              title={skill.title}
              icons={skill.icons}
              key={skill.title}
            />
          );
        })}
    </Wrapper>
  );
};
export default Skills;
