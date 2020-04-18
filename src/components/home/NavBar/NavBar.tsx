import React, { useEffect, useState, useRef } from "react";
import {
  Nav,
  // Button,
  Cart,
  Logo,
  Navlist,
  Container,
  BurgerMenu,
} from "./NavBarStyle";
import { Link } from "react-router-dom";
import { Menu, Icon, Input, Button } from "semantic-ui-react";
import { getOrders, searchItems } from "../../productReducer/actions";
import { useDispatch, useSelector } from "react-redux";
import MobileView from "./MobileView";

// const options = [
//   { key: "page", text: "All Category", value: "all" },
//   { key: "org", text: "Men Wear", value: "men" },
//   { key: "site", text: "Women Wear", value: "women" }
// ];

const NavBar = ({ state }: any) => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [show, setShow] = useState(false);
  const orderCount = useSelector(
    ({ productReducer }: any) => productReducer.orders
  );
  const NoOfCarts = useSelector(
    ({ productReducer }: any) => productReducer.order
  );
  const deleteCart = useSelector(
    ({ productReducer }: any) => productReducer.delete_msg
  );
  const deleteWishList = useSelector(
    ({ productReducer }: any) => productReducer.delete_wishlist
  );
  const searchP = useSelector(
    ({ productReducer }: any) => productReducer.searchProducts
  );
  const wishlist: any = localStorage.getItem("wishlist");
  // console.log(wishlist);

  const handleInput = (e: any) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    getOrders(dispatch);
    searchItems(dispatch, searchText);
  }, [NoOfCarts, deleteCart, deleteWishList, searchText]);

  return (
    <Container className={`${state && "sticky"}`}>
      <div className={`mobile ${show && "showbar"}`}>
        {/* <h1
          onClick={() => {
            setShow(!show);
          }}
        >
          &times;
        </h1> */}
        <MobileView />
      </div>
      <Nav>
        <Logo>
          <Link to='/' className='link'>
            <h2>Ere Place</h2>
          </Link>
        </Logo>
        <Navlist className='nav-list'>
          <Input
            onChange={handleInput}
            icon='search'
            iconPosition='left'
            placeholder='Search...'
          />

          <Button animated className='login'>
            <Button.Content visible>Login</Button.Content>
            <Button.Content hidden>
              <Icon name='user' />
            </Button.Content>
          </Button>
          <Button animated className='register'>
            <Button.Content visible>Register</Button.Content>
            <Button.Content hidden>
              <Icon name='users' />
            </Button.Content>
          </Button>
        </Navlist>
        <Cart>
          <div className='shopping'>
            <Link to='/wishlist'>
              <Icon name='heart' className='heart' />
              <sup>{JSON.parse(wishlist).length}</sup>
            </Link>
          </div>
          <div className='shopping'>
            <Link to='/cart'>
              <Icon name='add to cart' className='cart' />
              <sup>{orderCount}</sup>
            </Link>
          </div>
        </Cart>
        <BurgerMenu
          onClick={() => {
            setShow(!show);
          }}
          className={`${show && "close_icon"}`}
        >
          <div></div>
          <div></div>
          <div></div>
        </BurgerMenu>
      </Nav>
    </Container>
  );
};

export default NavBar;
