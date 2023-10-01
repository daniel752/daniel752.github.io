import styled from "styled-components";

const Wrapper = styled.section`
  width: 99vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .card {
    display: grid;
    justify-items: center;
    margin-bottom: 5rem;
  }

  .icons {
    display: flex;
    column-gap: 5rem;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-evenly;
  }

  .icon-container {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    align-items: center;
  }

  .icon {
    width: 7.5rem;
    height: auto;
  }

  .icon-name {
  }

  h3 {
    margin-top: 0;
    font-size: 56px;
  }
`;

export default Wrapper;
