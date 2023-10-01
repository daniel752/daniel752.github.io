const ServiceSection = ({ title, icon, description, examples }) => {
  return (
    <div className="service-container">
      <div className="service-header">
        <h3>{title}</h3>
        <img src={icon} alt={`icon for ${title}`}></img>
      </div>
      <div className="service-body">
        <p>{description}</p>
        {examples &&
          examples.map((example) => {
            console.log(example);
            return (
              <>
                <h6>{example.title}</h6>
                <p>{example.description}</p>
              </>
            );
          })}
      </div>
    </div>
  );
};
export default ServiceSection;
