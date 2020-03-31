import styled from "styled-components";

export const Image = styled.div`
  .first-section-image {
    height: 70vh;
    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 660px) {
    .first-section-image {
      height: 40vh;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
