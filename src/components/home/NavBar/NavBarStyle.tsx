import styled from "styled-components";

export const Nav = styled.nav`
  background: #fff;
  /* background-color: #010024; */
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0px 2px 25px #ddd;
  top: 0;
  z-index: 30;

  @media (max-width: 1100px) {
    justify-content: space-evenly;
    padding: 0 2%;
  }
  @media (max-width: 700px) {
    padding: 0 2%;

    input {
      display: none;
      font-size: 1.3rem;
      /* border: 0.3px solid #ccc; */
      box-shadow: 0 2px 15px #ddd;
      outline: none;
    }

    .nav-cart {
      position: absolute;
      top: 10vh;
      left: 0;
      right: 0;
      flex-direction: column;
      background-color: #010024;
      padding: 3% 10%;
      width: 100%;
      z-index: 20;

      button {
        margin: 10px 0;
      }
    }
  }

  .nav-logo {
    color: gold;
  }

  .nav-list {
    input {
      font-size: 1.3rem;
      /* border: 0.3px solid #ccc; */
      box-shadow: 0 2px 15px #ddd;
      outline: none;
    }
  }

  .nav-cart {
    display: flex;
    align-self: center;

    button {
      background: #fff;
      border: 0.5px solid #ddd;
      margin: 0;
    }
    /* .login {
      color: cyan;
      font-size: 1.3rem;
      box-shadow: 0 2px 15px #eee;
      /* background: orange; */
  }
  */ .login,
  .register {
    color: #555;
    font-size: 1.2rem;
    box-shadow: 0 2px 15px #eee;
    /* background: orange; */

    .links {
      text-decoration: none;
      color: #eee;
    }

    sup {
      color: #eee;
      font-size: 1.2rem;
      padding-left: 0.5rem;
    }
  }
`;
