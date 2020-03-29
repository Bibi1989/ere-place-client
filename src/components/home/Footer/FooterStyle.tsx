import styled from "styled-components";

let scroll: string = "35vh";
// window.onscroll = () => {
//   if (window.scrollY > 40) {
//     scroll = "";
//   }
// };
export const Div = styled.div`
  margin-top: ${window.scrollY === 0 ? scroll : 0};

  .copy-right {
    background-color: #f2711c;
    text-align: center;
    padding: 0.4em 0;
    border-top: 1px solid #999;
  }
`;

export const Footer = styled.div`
  background-color: #f2711c;
  color: #eee;
  /* background-color: #010024; */
  /* margin-top: 10em; */
  padding: 3% 10%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;

  .customer {
    .social-icons {
      display: flex;
    }

    .suscribe {
      margin-top: 1em;

      input {
        width: 100%;
      }
    }

    .payment {
      padding: 0.5em 0;
      font-size: 3.5em;

      i {
        margin: 0 0.1em;
      }
    }
  }
`;
