import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const Loaders = () => {
  return (
    <Div>
      <Loader type='Oval' color='orangered' height={150} width={150} />
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  padding: 5em 0;
  display: flex;
  justify-content: center;
`;

export default Loaders;
