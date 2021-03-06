import styled from "styled-components";

export const Side = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2% 10%;

  @media (max-width: 1100px) {
    padding: 2% 5%;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 2% 1em;
  }
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
  cursor: pointer;
  position: relative;

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

export const Lab = styled.div`
  position: relative;

  input {
    display: none;
  }

  input:checked ~ .show {
    opacity: 1;
    pointer-events: visible;
  }

  .show {
    opacity: 0;
    position: absolute;
    top: 3em;
    pointer-events: none;
    z-index: 20;
  }
`;
