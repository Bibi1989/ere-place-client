import styled from "styled-components";

export const Side = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2% 10%;
`;

export const Div = styled.div`
  width: 100%;
  border-bottom: 0.5px solid #ccc;
  .links {
    color: #555;
    text-decoration: none;
  }
`;
export const Label = styled.label`
  padding-right: 2em;
  position: relative;

  display: flex;

  .tri {
    /* background: orangered; */
    width: 0;
    height: 0;
    border-top: 5px solid orangered;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0.8em;
    width: 0;
    height: 0;
    transform: translateY(-30%);
    border-top: 5px solid orangered;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }
`;
