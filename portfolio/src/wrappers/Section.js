import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  justify-content: center;
  width: 100%;

  .section {
    opacity: 1;
    transition: opacity 1.5s ease;
    width: 100%;
  }

  .hidden-element {
    opacity: 0;
    transition: opacity 2s ease;
    width: 100%;
  }

  .section-title {
    position: relative;
    padding-bottom: 1rem;
    margin: 2rem;
  }

  .section-title::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    height: 2px;
    background: linear-gradient(90deg, transparent 10%, #000, transparent 90%);
  }

  h1 {
    display: flex;
    justify-content: center;
  }

  .arrow-container {
    position: relative;
    margin-top: 2rem;
  }

  .arrow {
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #000;
    animation: moveDownUp 2s infinite;
  }

  @media (min-width: 992px) {
    .arrow {
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-top: 20px solid #000;
    }
  }
`;

export default Wrapper;
