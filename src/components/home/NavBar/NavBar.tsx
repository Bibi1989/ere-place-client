import React, { useEffect, useState, useRef } from "react";
import { Nav } from "./NavBarStyle";
import { Link } from "react-router-dom";
import { Menu, Icon, Label, Input, Dropdown, Select } from "semantic-ui-react";
import { getOrders, searchItems } from "../../productReducer/actions";
import { useDispatch, useSelector } from "react-redux";

// const options = [
//   { key: "page", text: "All Category", value: "all" },
//   { key: "org", text: "Men Wear", value: "men" },
//   { key: "site", text: "Women Wear", value: "women" }
// ];

const NavBar = ({ state }: any) => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const cate: any = useRef();
  console.log(cate.current);
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
    <Nav style={state ? { position: "sticky" } : {}} data-aos='zoom-in'>
      <div className='nav-logo'>
        <Link to='/'>
          <h2>Ere Place</h2>
        </Link>
      </div>
      <div className='nav-list'>
        {/* <input type='text' placeholder='Search for a clothing...' /> */}
        <Input
          onChange={handleInput}
          icon='search'
          iconPosition='left'
          placeholder='Search...'
        />
      </div>
      <div className='nav-cart'>
        {/* <p>
          <i className='fas fa-heart'></i>
          {JSON.parse(wishlist) === null ? 0 : JSON.parse(wishlist).length}
        </p> */}
        <Menu compact style={{ marginRight: "1em !important" }}>
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
        <Menu compact>
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
        {/* </p> */}
        <p className='login'>Login</p>
        <p className='register'>Register</p>
      </div>
    </Nav>
  );
};

export default NavBar;
