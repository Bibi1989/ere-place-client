import React from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import MenCategory from "./ProductsComponent/CategoryComponents/MenCategory/MenCategory";
import WomenCategory from "./ProductsComponent/CategoryComponents/WomenCategory/WomenCategory";
import { Link } from "react-router-dom";

const TrySomething = () => {
  return (
    <Wrapper>
      <Div data-aos='zoom-in'>
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
      </Div>
    </Wrapper>
  );
};

export default TrySomething;

const Wrapper = styled.div`
  /* padding: 10% 0; */
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${"./images/fashion3.jpg"});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  border-radius: 5px;

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

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    min-height: 600px;
    padding: 0 5%;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    max-height: 400px;
    display: none;
  }

  .overlay-section {
  }
`;
