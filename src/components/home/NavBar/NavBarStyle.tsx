import styled from "styled-components";

export const Container = styled.div`
  background: white;
  width: 100%;
  z-index: 100;
  /* max-height: 10vh;
  min-height: 8vh; */

  &.sticky {
    position: fixed;
    background: rgba(255, 68, 0, 0.678);
    border-bottom: 0.5px solid #eee;
  }

  .mobile {
    position: fixed;
    top: -63%;
    width: 100%;
    z-index: 80;
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
    top: 10vh;
  }
`;

export const Nav = styled.nav`
  max-width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 20% 70% 10%;
  position: relative;
  z-index: 90;
  background: white;

  @media (max-width: 1100px) {
    max-width: 90%;
  }
  @media (max-width: 800px) {
    max-width: 90%;
  }
  @media (max-width: 700px) {
    grid-template-columns: 50% 30% 20%;
    max-width: 100%;
    padding: 1.5em 1em;
  }
`;

export const Navlist = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1.5em 0;

  .register,
  .login {
    border-radius: 20px;
    border: none;
    margin-left: 1em;
  }

  .register {
    background: orangered;
    color: white;
  }
  .login {
    background: transparent;
    color: #333;
  }

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
    width: 40px;
    height: 4px;
    margin: 3px;
    background: #555;
    border-radius: 5px;
    transition: all 0.7s ease-in-out;
  }

  &.close_icon {
    div:nth-child(1) {
      transform: rotate(45deg) translate(0, 350%);
      background: orangered;
    }
    div:nth-child(2) {
      opacity: 0;
    }
    div:nth-child(3) {
      transform: rotate(-45deg) translate(0, -350%);
      background: orangered;
    }
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
