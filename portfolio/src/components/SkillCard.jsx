import { IconContext } from "react-icons";

const SkillCard = ({ title, icons }) => {
  return (
    <div className="card">
      <h3 className="title">{title}</h3>
      <span className="icons">
        <IconContext.Provider value={{ size: 120 }}>
          {icons &&
            icons.map((icon, index) => {
              return (
                <div className="icon-container">
                  {icon?.icon ? (
                    <span key={index} className="icon">
                      {icon.icon}
                    </span>
                  ) : (
                    <img className="icon" src={icon.image}></img>
                  )}
                  <span className="icon-name">{icon.name}</span>
                </div>
              );
            })}
        </IconContext.Provider>
      </span>
    </div>
  );
};
export default SkillCard;
