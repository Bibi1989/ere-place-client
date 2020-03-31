import React from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import MenCategory from "./ProductsComponent/CategoryComponents/MenCategory/MenCategory";
import WomenCategory from "./ProductsComponent/CategoryComponents/WomenCategory/WomenCategory";
import { Link } from "react-router-dom";

const TrySomething = () => {
  return (
    <>
      <Div data-aos='zoom-in'>
        <div className='overlay-section'>
          <Button>
            <Link className='link' to='/men'>
              Men Wears
            </Link>
          </Button>
          <Button>
            <Link className='link' to='/women'>
              Women Wears
            </Link>
          </Button>
        </div>
        <div className='text-section'>
          <h1>Free Delivery</h1>
          <Button>Buy From Store</Button>
        </div>
      </Div>
      <MenCategory />
      <WomenCategory />
    </>
  );
};

export default TrySomething;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1%;
  padding: 0 10%;
  height: 400px;
  position: relative;

  @media (max-width: 656px) {
    grid-template-columns: 1fr;
    height: 600px;

    .text-section {
      display: none;
    }
  }

  .overlay-section {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${"./images/fashion3.jpg"});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 400px;
    border-radius: 5px;
    /* position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #22222286; */

    button {
      background: orangered;
      color: #eee;
      padding: 1rem 2rem;
      margin: 0 1rem;
      border: 0.3px solid #ccc;
      border-radius: 2px;
      box-shadow: 0 2px 15px #22222286;
      outline: none;
      cursor: pointer;

      .link {
        text-decoration: none;
        color: #eee;
      }
    }
  }

  .text-section {
    /* background-image: linear-gradient(
      to right top,
      #051937,
      #004d7a,
      #008793,
      #00bf72,
      #a8eb12
    ); */
    background-image: linear-gradient(
      to right top,
      #845ec2,
      #9b82d0,
      #b5a6dc,
      #d0cae6,
      #eeeeee
    );
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15%;

    h1 {
      font-size: 2.5rem;
      font-weight: 900;
      color: #eee;
      padding-bottom: 5%;
    }

    button {
      background: orangered;
      color: #eee;
      padding: 1rem 2rem;
      border: 0.3px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 2px 15px #22222286;
      outline: none;
      width: 30%;
      cursor: pointer;
    }
  }
`;
