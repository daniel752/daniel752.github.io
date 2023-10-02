import styled from "styled-components";

const Wrapper = styled.section`
  width: 99vw;

  .contact-card {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    align-items: center;
  }

  .icons-row {
    display: flex;
    flex-direction: row;
    column-gap: 0rem;
    justify-content: center;
    align-items: center;
  }

  .icon {
    width: 5rem;
    height: auto;
  }

  svg {
    width: 3rem;
    height: auto;
  }

  p {
    text-align: center;
  }

  @media (min-width: 992px) {
    .icons-row {
      column-gap: 4rem;
    }
  }
`;

export default Wrapper;
