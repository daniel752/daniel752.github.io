import React, { useState } from "react";
import { IconContext } from "react-icons";

const ProjectContainer = ({ title, image, description, techStack, href }) => {
  const [playFloatAnimation, setPlayFloatAnimation] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const handleImageClick = (imageSrc) => {
    setModalImageSrc(imageSrc);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="project container">
      <h3>{title}</h3>
      <div
        className={`image container ${
          playFloatAnimation ? "float-animation" : ""
        }`}
      >
        <img
          src={image}
          alt={`screenshot image of project ${title}`}
          className="image"
          onMouseEnter={() => setPlayFloatAnimation(true)}
          onMouseLeave={() => setPlayFloatAnimation(false)}
          onClick={() => handleImageClick(image)}
        />
      </div>
      <p>{description}</p>
      <div className="tech-stack">
        {techStack &&
          techStack.map((element, index) => {
            return (
              <div key={index} className="tech-stack-item">
                <IconContext.Provider value={{ size: 56 }}>
                  {element?.icon ? (
                    <span className="tech-icon">{element.icon}</span>
                  ) : (
                    <img
                      className="tech-image"
                      src={element.image}
                      alt={`image for ${element.name}`}
                    ></img>
                  )}
                </IconContext.Provider>
                <span className="tech-name">{element.name}</span>
              </div>
            );
          })}
      </div>
      <a className="view-button" href={href} target="_blank">
        View Project
      </a>

      {modalVisible && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img className="modal-content" src={modalImageSrc} alt="Modal" />
        </div>
      )}
    </div>
  );
};

export default ProjectContainer;
