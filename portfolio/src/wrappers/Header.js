import styled from "styled-components";

const Wrapper = styled.section`
  .header {
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100vw;
    height: var(--nav-height);
    display: grid;
    align-items: center;
    grid-template-columns: 3fr 0.5fr;
    box-shadow: var(--shadow-2);
    background: white;
  }

  .folded-nav-links {
    display: none;
    margin: 0;
  }

  .nav-link {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 5vw;
    font-size: var(--font-big);
    text-transform: capitalize;
    height: auto;
  }

  .nav-link svg {
    width: 10vw;
    height: auto;
  }

  .open-nav-menu {
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10vh;
  }

  .nav-container {
    width: 100%;
  }

  .logo {
    width: auto;
    height: var(--nav-height);
    margin-left: 1rem;
  }

  @media (min-width: 992px) {
    .header {
      height: 5rem;
      grid-template-columns: 1fr 2fr;
      background: white;
    }

    .nav-menu {
      display: none;
    }

    .nav-links {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }

    .nav-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .nav-link {
      width: 100%;
      display: grid;
      grid-auto-flow: column;
      column-gap: 0.5rem;
      font-size: 22px;
      text-decoration: none;
      text-transform: capitalize;
    }

    .active-nav-link {
      position: relative;
      color: rgb(0, 0, 0);
      border-bottom: 2px solid black;
    }

    .header-title {
      width: 100%;
      height: auto;
      margin: auto auto;
      font-size: 60px;
      font-weight: 1000;
      padding: 0.5rem 0.5rem 0 0.5rem;
    }
  }
`;

export default Wrapper;
