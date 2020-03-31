import React, { useEffect, useState, useRef } from "react";
import { Nav } from "./NavBarStyle";
import { Link } from "react-router-dom";
import { Menu, Icon, Label, Input, Button } from "semantic-ui-react";
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
  console.log(searchP);

  const handleInput = (e: any) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    getOrders(dispatch);
    searchItems(dispatch, searchText);
  }, [NoOfCarts, deleteCart, deleteWishList, searchText]);

  return (
    <Nav style={state ? { position: "sticky" } : {}}>
      <div className='nav-logo'>
        <Link to='/'>
          <h2>Ere Place</h2>
        </Link>
      </div>
      <Button onClick={() => setShow(!show)}>Menu</Button>
      <div
        className='nav-cart'
        style={
          show
            ? { position: "absolute", transition: "left 0.7s ease-in-out" }
            : {
                position: "absolute",
                left: "-100%",
                transition: "left 0.7s ease-in-out"
              }
        }
      >
        {/* {show && (
          <MobileView
            handleInput={handleInput}
            wishlist={wishlist}
            orderCount={orderCount}
          />
        )} */}
        <div className='nav-list'>
          <Input
            onChange={handleInput}
            icon='search'
            iconPosition='left'
            placeholder='Search...'
          />
        </div>
        <Menu compact className='wish'>
          <Menu.Item>
            <Link className='links' to='/wishlist'>
              <Icon name='heart' size='large' color='teal' />
              <Label color='orange' floating>
                {JSON.parse(wishlist) === null
                  ? 0
                  : JSON.parse(wishlist).length}
              </Label>
            </Link>
          </Menu.Item>
        </Menu>
        <Menu compact style={{ margin: "0" }} className='wish'>
          <Menu.Item>
            <Link className='links' to='/cart'>
              <Icon name='shopping bag' size='large' color='orange' />
              <Label color='orange' floating>
                {/* {JSON.parse(orders) === null ? 0 : JSON.parse(orders).length} */}
                {orderCount}
              </Label>
            </Link>
          </Menu.Item>
        </Menu>
        <Button className='login'>Login</Button>
        <Button className='register'>Register</Button>
      </div>
    </Nav>
  );
};

export default NavBar;
