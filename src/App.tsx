import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { Provider } from "react-redux";
import styled from "styled-components";
import store from "./redux/store";
import "./App.css";
import NavBar from "./components/home/NavBar/NavBar";
import SideBar from "./components/home/SideBar/SideBar";
import ProductSection from "./components/home/ProductsComponent/ProductSection";
import SingleProduct from "./components/home/ProductsComponent/SingleProduct/SingleProduct";
import AddProducts from "./components/home/AddProducts/AddProducts";
import TrySomething from "./components/home/TrySomething";
import AllMen from "./components/home/ProductsComponent/CategoryComponents/AllProducts/AllMen/AllMen";
import AllWomen from "./components/home/ProductsComponent/CategoryComponents/AllProducts/AllWomen/AllWomen";
import CartComponent from "./components/orders/CartComponent";
import WishList from "./components/wishlist/WishList";
import FooterComponent from "./components/home/Footer/Footer";
import FilteredProducts from "./components/filteredProducts/FilterdProducts";

function App() {
  const [state, setState] = useState(false);
  window.onscroll = () => {
    if (window.scrollY > 530) {
      setState(true);
    } else {
      setState(false);
    }
  };

  const handleScrollUp = () => {
    window.scrollTo(0, 0);
  };

  const style: any = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: "30"
  };
  return (
    <Provider store={store}>
      <Router>
        {state && (
          <Button
            data-aos='zoom-in'
            circular
            icon='angle up'
            style={style}
            onClick={handleScrollUp}
          />
        )}
        <NavBar state={state} />
        <Switch>
          <Route exact path='/'>
            <Div>
              <SideBar />
              <ProductSection />
            </Div>
            <TrySomething />
          </Route>
          <Route exact path='/filtered/:ankara'>
            <Div>
              <SideBar />
              <FilteredProducts />
            </Div>
          </Route>
          <Route exact path='/men'>
            <AllMen />
          </Route>
          <Route exact path='/women'>
            <AllWomen />
          </Route>
          <Route exact path='/cart'>
            <CartComponent />
          </Route>
          <Route exact path='/wishlist'>
            <WishList />
          </Route>
          <Route exact path='/single/:singleId'>
            <SingleProduct />
          </Route>
          <Route exact path='/show'>
            <AddProducts />
          </Route>
        </Switch>
        <FooterComponent />
      </Router>
    </Provider>
  );
}

export default App;

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
