import styled from "styled-components";
const fashion_img = "../../../../../images/fashion3.jpg";

export const Image = styled.div`
  div {
    background: url(${fashion_img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: 100%;
    background-attachment: fixed;
    width: 100%;
    height: 80vh;
  }

  @media (max-width: 700px) {
    min-height: 40vh;
  }
`;
