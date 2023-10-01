const IconLink = ({ icon, href, target }) => {
  return (
    <a className="icon" href={href} target={target}>
      {icon}
    </a>
  );
};
export default IconLink;
