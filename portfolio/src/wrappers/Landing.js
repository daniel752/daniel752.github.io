import styled from "styled-components";

const Wrapper = styled.section`
  width: 99vw;
  height: auto;
  display: flex;
  justify-content: center;

  .landing-container {
    height: fit-content;
  }

  p {
    text-align: left;
    margin: 0 1rem;
  }

  /* Big Screens */
  @media (min-width: 992px) {
    p {
      margin: 0 4rem 10rem 4rem;
    }
  }
`;

export default Wrapper;
