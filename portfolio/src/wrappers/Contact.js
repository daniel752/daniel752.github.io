import styled from "styled-components";

const Wrapper = styled.section`
  width: 99vw;

  .contact-card {
    display: flex;
    flex-direction: column;
  }
  .icons-row {
    display: flex;
    flex-direction: row;
    column-gap: 4rem;
    justify-content: center;
    align-items: center;
  }
  .icon {
    width: 5rem;
    height: auto;
  }

  h1 {
    margin: 0 0 1rem 0;
  }

  p {
    font-size: 2rem;
    text-align: center;
  }
`;

export default Wrapper;
