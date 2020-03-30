import React from "react";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import FilteredProducts from "../../filteredProducts/FilterdProducts";

const ProductSection = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <FilteredProducts />
    </div>
  );
};

export default ProductSection;
