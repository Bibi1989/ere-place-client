import styled from "styled-components";

export const Div = styled.div`
  padding: 2% 1em;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    padding-bottom: 75%;
  }

  .select {
    align-self: flex-end;
    color: #777;
    border: none;
    outline: none;

    i {
      font-size: 1.5rem;
    }

    select {
      color: #777;
      border: none;
      outline: none;
    }
  }
`;
