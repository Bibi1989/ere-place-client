import styled from "styled-components";

export const Container = styled.div`
  background: whitesmoke;
  width: 100%;
  position: fixed;
  z-index: 189;
  max-height: 10vh;
  min-height: 8vh;

  .mobile {
    position: fixed;
    left: -73%;
    width: 70%;
    z-index: 100;
    transition: all 0.9s ease-in-out;

    h1 {
      position: absolute;
      right: 16px;
      top: 20px;
      font-size: 5em;
      color: white;
    }
  }

  .showbar {
    left: 0;
  }
`;

export const Nav = styled.nav`
  max-width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 20% 70% 10%;
  border-bottom: 0.5px solid #eee;

  @media (max-width: 800px) {
    max-width: 90%;
  }
  @media (max-width: 700px) {
    grid-template-columns: 50% 30% 20%;
    max-width: 96%;
    padding: 1.2em 0;
  }
`;

export const Navlist = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1.2em 0;

  @media (max-width: 700px) {
    display: none;

    .link {
      text-decoration: none;
      color: orangered;

      h2 {
        font-size: 1.5em;
      }
    }
  }
`;
export const Button = styled.button`
  padding: 0 1.5em;
  margin-left: 1em;
  outline: none;
  border: 1px solid #999;
  background: transparent;
  color: #555;
  border-radius: 0.3em;
  cursor: pointer;
`;
export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .shopping {
    position: relative;

    sup {
      position: absolute;
      top: -5%;
      left: 90%;
      font-size: 1.5em;
    }
  }

  .cart,
  .heart {
    font-size: 1.7em;
  }

  .cart {
    color: orangered;
  }
  .heart {
    color: teal;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  .link {
    text-decoration: none;
    color: orangered;

    h2 {
      font-size: 2em;
    }
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  div {
    width: 45px;
    height: 5px;
    margin: 3px;
    background: #555;
    border-radius: 5px;
  }

  @media (max-width: 700px) {
    display: flex;

    .link {
      text-decoration: none;
      color: orangered;

      h2 {
        font-size: 1.5em;
      }
    }
  }
`;
