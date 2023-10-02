import styled from "styled-components";

const Wrapper = styled.section`
  width: 99vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .card {
    display: grid;
    justify-content: start;
    margin-bottom: 3rem;
  }

  .icons {
    display: flex;
    flex-wrap: wrap;
    column-gap: 1.5rem;
    row-gap: 0.5rem;
    align-items: center;
    justify-content: flex-start;
    padding-left: 1rem;
  }

  .icon-container {
    display: flex;
    flex-direction: column;
    width: 6rem;
    row-gap: 0.2rem;
    align-items: center;
  }

  h3 {
    margin: 0 1rem 1rem 1rem;
  }

  .icon {
    width: 2rem;
    height: auto;
    object-fit: cover;
  }

  svg {
    width: 2rem;
    height: auto;
  }

  .icon-name {
  }

  /* Medium Screens */
  @media (min-width: 600px) {
  }

  @media (min-width: 992px) {
    .card {
      justify-items: center;
      justify-content: center;
      margin-bottom: 5rem;
    }

    .icons {
      column-gap: 5rem;
    }

    .icon-container {
      row-gap: 1rem;
    }

    .icon {
      width: 7.5rem;
    }

    svg {
      width: 7.5rem;
      height: auto;
    }
  }
`;

export default Wrapper;
