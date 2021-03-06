import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  addOrder,
  addWishList,
} from "../../../productReducer/actions";
import ProductComponent from "../../../products/ProductComponent";
import { Div } from "./SecondSectionStyle";
import TrySomething from "../../TrySomething";
import WomenCategory from "../CategoryComponents/WomenCategory/WomenCategory";
import MenCategory from "../CategoryComponents/MenCategory/MenCategory";
import Loader from "../../../../Loader/Loader";

const SecondSection = () => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState();
  React.useEffect(() => {
    setTimeout(() => {
      getProducts(dispatch);
    }, 500000);
    // eslint-disable-next-line
  }, []);
  let products =
    useSelector(({ productReducer }: any) => productReducer.products).slice(
      0,
      6
    ) || [];

  const searched: any = useSelector(
    ({ productReducer }: any) => productReducer.searchProducts
  );
  products = searched.length > 0 ? searched : products;
  products = products.slice(0, 6);

  const handleSelect = (e: any) => {
    const sorted: any = [...products].reverse();
    setState(sorted);
    const sortByDate: any = [...products].reverse();
    const sortByPriceLowHigh: any = [...products].sort(
      (a: any, b: any) => parseInt(a.price) - parseInt(b.price)
    );
    const sortByPriceHighLow: any = [...products].sort(
      (a: any, b: any) => parseInt(b.price) - parseInt(a.price)
    );
    if (e.target.value === "date") {
      return setState(sortByDate);
    }
    if (e.target.value === "low_high") {
      return setState(sortByPriceLowHigh);
    }
    if (e.target.value === "high_low") {
      return setState(sortByPriceHighLow);
    }
  };

  const quantity: string = "1";

  const handleCart = (product: any) => {
    addOrder(dispatch, product, quantity);
  };

  const handleWishList = (pro: any) => {
    addWishList(dispatch, pro);
  };

  if (products.length === 0) return <Loader />;
  return (
    <Div className='second-section-mobile'>
      <div className='select'>
        <i className='fas fa-sort-amount-down-alt'></i>
        <select name='' onChange={handleSelect}>
          <option value=''>Sort Latest collections</option>
          <option value='date'>Sort by date</option>
          <option value='low_high'>Price: lowest - Highest</option>
          <option value='high_low'>Price: Highest - Lowest</option>
        </select>
      </div>
      {state ? (
        <ProductComponent
          products={state}
          title='Latest Collections'
          handleCart={handleCart}
          handleWishList={handleWishList}
        />
      ) : (
        <ProductComponent
          products={products}
          title='Latest Collections'
          handleCart={handleCart}
          handleWishList={handleWishList}
        />
      )}
      <TrySomething />
    </Div>
  );
};

export default SecondSection;
