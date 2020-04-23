import styled from "styled-components";

export const Div = styled.div`
  padding: 5% calc(15% - 1em);
  h1 {
    text-align: center;
    padding: 0;
  }

  @media (max-width: 1300px) {
    padding: 5%;
  }
  @media (max-width: 1100px) {
    padding: 5%;
  }
  @media (max-width: 700px) {
    padding: 5% 0 0 0;
  }
`;

export const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5%;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 10% 0% 10% 0;
    grid-gap: 3%;
  }
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2%;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .second-section-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 450px;
    /* min-width: 300px; */
    color: #777;
    overflow: hidden;
    border-radius: 40px 0 1px 0;
    transform: scale(1);

    .second-section-detail {
      display: flex;
      flex-direction: column;
      width: 100%;
      /* height: 100%; */
      padding: 10px;
      border: 0.6px solid #ddd;
      border-radius: 0px 0 40px 1px;

      .second-section-content-one {
        display: flex;
        justify-content: space-between;
      }

      .second-section-content-two {
        display: flex;
        justify-content: flex-start;
      }
    }

    .second-section-image {
      height: 450px;
      width: 100%;
      position: relative;
      border: 1px solid #ddd;
      overflow-x: hidden;
      overflow-y: hidden;
      border-radius: 40px 0 1px 0;
      transition: all 0.7s ease-in;
      img {
        width: 100%;
        min-height: 100%;
      }
      .second-section-overlay {
        position: absolute;
        right: -40px;
        bottom: 20px;
        transition: all 0.5s ease-in;

        .cart {
          position: relative;
        }

        .overlay-icons {
          display: flex;
          flex-direction: column;
          span {
            transition: all 0.5s ease-in;
            opacity: 0;
            font-size: 0.8rem;
          }

          i {
            color: orangered;
            font-size: 1.7rem;
            margin: 1rem 0;
            cursor: pointer;
            transition: all 0.4s ease;

            &:hover {
              transform: scale(1.95);
            }
          }
        }
      }

      &:hover .second-section-overlay {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        right: 10px;
        bottom: 0px;
        padding: 15px;
        width: 100%;
        height: 100%;
        background-color: #22222286;
        box-shadow: 0px 2px 15px #22222286;
        border-radius: 3px;
        transition: all 0.7s ease-in;
        .overlay-icons {
          span {
            opacity: 0.9;
            transition: all 0.7s ease-in;
            color: teal;
          }
        }
      }
    }
    &:hover .second-section-image {
      border-radius: 10px;
      transform: scale(1.05);
      z-index: 5;
      transition: all 0.7s ease-in;
    }
  }
`;
