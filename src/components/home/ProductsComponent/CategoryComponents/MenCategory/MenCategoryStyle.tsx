import styled from "styled-components";

export const Div = styled.div`
  padding: 2% 15%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1100px) {
    padding: 2% 10% 2% 0;
  }
  @media (max-width: 700px) {
    padding: 2% 1em;
  }

  h1 {
    font-size: 3rem;
    color: #555;
    text-align: center;
  }
  button {
    border: 1px solid #999;
    padding: 1rem 2rem;
    background: #fff;
    border-radius: 5px;
    cursor: pointer;
    display: block;
    outline: 0;

    .links {
      color: #999;
      font-size: 1.3rem;
    }
  }
`;
