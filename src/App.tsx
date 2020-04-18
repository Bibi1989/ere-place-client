import React, { useState, lazy, Suspense } from "react";
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
import FirstSection from "./components/home/ProductsComponent/FirstSection/FirstSection";
// import SecondSection from "./components/home/ProductsComponent/SecondSection/SecondSection";
import MenCategory from "./components/home/ProductsComponent/CategoryComponents/MenCategory/MenCategory";
import WomenCategory from "./components/home/ProductsComponent/CategoryComponents/WomenCategory/WomenCategory";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const SecondSection = lazy(() =>
  import("./components/home/ProductsComponent/SecondSection/SecondSection")
);

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
    zIndex: "30",
  };
  return (
    <Provider store={store}>
      <Container>
        <div>
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
            <Wrapper>
              <Switch>
                <Route exact path='/'>
                  <SideBar />
                  <FirstSection />
                  <Suspense fallback={<div>Loading...</div>}>
                    <SecondSection />
                  </Suspense>
                  <MenCategory />
                  <WomenCategory />
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
            </Wrapper>
          </Router>
        </div>
        <FooterComponent />
      </Container>
    </Provider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;
const Wrapper = styled.div``;

const Div = styled.div`
  padding: 2% 10%;
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100%;

  @media (max-width: 1100px) {
    padding: 2% 5%;
  }
  @media (max-width: 900px) {
    padding: 2%;
  }
  @media (max-width: 700px) {
    padding: 2% 1em;
    grid-template-columns: 1fr;
  }
  @media (max-width: 500px) {
    padding: 2% 15px;
    grid-template-columns: 1fr;
  }
`;
