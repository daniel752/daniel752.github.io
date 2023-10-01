import styled from "styled-components";

const Wrapper = styled.section`
  width: 99vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .projects {
    margin: 0 auto;
    display: grid;
    grid-auto-rows: auto;
    row-gap: 5rem;
  }

  .container {
    box-shadow: var(--shadow-around-2);
    border-radius: var(--radius-2);
  }

  .project {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    max-height: 100%;
    padding: 0.5rem 1rem;
  }

  .image.container {
    width: 100%;
    height: 100%;
    max-width: 100rem;
    max-height: fit-content;
    box-shadow: var(--shadow-2);
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius-1);
  }

  p {
    width: 100%;
    height: 100%;
    max-width: 99rem;
    max-height: fit-content;
    text-align: left;
    font-size: 1.5rem;
    padding: 0px 0.5rem;
  }

  a {
    padding: 0.5rem;
    box-shadow: var(--shadow-3);
    border-radius: var(--radius-1);
    background-color: var(--grey-2);
  }

  .modal {
    padding: 0 auto;
    display: grid;
    position: fixed;
    z-index: 1;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.7);
    align-items: center;
  }

  .modal-content {
    margin: 2rem auto;
    display: block;
    max-width: 85%;
    max-height: 85%;
  }

  .close {
    color: white;
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 30px;
    cursor: pointer;
  }

  .float-animation {
    animation: floatAnimation 2.5s ease-in-out;
  }

  .tech-stack {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    justify-content: space-evenly;
  }

  .tech-stack-item {
    display: grid;
    justify-items: center;
    width: 7rem;
    height: auto;
  }

  .tech-name {
    text-align: center;
  }

  .tech-image {
    max-width: 60px;
  }
`;

export default Wrapper;
