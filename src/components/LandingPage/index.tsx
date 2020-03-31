import React from "react";
import styled from "styled-components";
import FirstSection from "../home/ProductsComponent/FirstSection/FirstSection";
import SideBar from "../home/SideBar/SideBar";

const LandingPage = () => {
  return (
    <Div>
      <SideBar />
      <FirstSection />
    </Div>
  );
};

export default LandingPage;

const Div = styled.div`
  padding: 2% 10%;
  display: grid;
  grid-template-columns: 25% 75%;

  @media (max-width: 1200px) {
    padding: 2% 5%;
  }
  @media (max-width: 900px) {
    padding: 2% 5%;
  }
  @media (max-width: 700px) {
    padding: 2% 5%;
    grid-template-columns: 1fr;
  }
  @media (max-width: 500px) {
    padding: 2% 15px;
    grid-template-columns: 1fr;
  }
`;
