import Wrapper from "../wrappers/Section";

const Section = ({ id, title, children, isPredecessor }) => {
  const handleMouseOver = () => {
    document.getElementById(`nav-${id}`).className = "nav-link active-nav-link";
  };
  const handleMouseLeave = () => {
    document.getElementById(`nav-${id}`).className = "nav-link";
  };

  return (
    <Wrapper>
      <div
        id={id}
        className="section"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        {title && <h1 className="section-title transparent-border">{title}</h1>}
        {children}
      </div>
      {isPredecessor && (
        <div className="arrow-container">
          <div className="arrow"></div>
        </div>
      )}
    </Wrapper>
  );
};
export default Section;
