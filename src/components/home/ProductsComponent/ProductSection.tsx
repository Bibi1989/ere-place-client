import React from "react";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import FilteredProducts from "../../filteredProducts/FilterdProducts";
import styled from "styled-components";

const ProductSection = () => {
  return (
    <div>
      <Grid>
        <FirstSection />
        <SecondSection />
      </Grid>
      <FilteredProducts />
    </div>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10%;
  padding: 3% 0;

  @media (max-width: 2000px) {
    grid-gap: 0%;
  }
  @media (max-width: 1400px) {
    grid-gap: 3%;
  }
  @media (max-width: 700px) {
    grid-gap: 1%;
  }
`;

export default ProductSection;
