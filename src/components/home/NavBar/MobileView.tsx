import React from "react";
import { Input, Menu, Icon, Label, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MobileView = ({ handleInput, wishlist, orderCount }: any) => {
  return (
    <Div className='nav-cart'>
      {/* <div className='nav-list'>
        <Input
          onChange={handleInput}
          icon='search'
          iconPosition='left'
          placeholder='Search...'
        />
      </div> */}
      <Menu compact className='wish'>
        <Menu.Item>
          <Link className='links' to='/wishlist'>
            <Icon name='heart' size='large' color='teal' />
            <Label color='orange' floating></Label>
          </Link>
        </Menu.Item>
      </Menu>
      <Menu compact style={{ margin: "0" }} className='wish'>
        <Menu.Item>
          <Link className='links' to='/cart'>
            <Icon name='shopping bag' size='large' color='orange' />
            <Label color='orange' floating>
              {/* {JSON.parse(orders) === null ? 0 : JSON.parse(orders).length} */}
              {/* {orderCount} */}
            </Label>
          </Link>
        </Menu.Item>
      </Menu>
      <Button className='login'>Login</Button>
      <Button className='register'>Register</Button>
    </Div>
  );
};

export default MobileView;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  background: orangered;
  color: #fff;
  min-height: 100vh;
  align-items: flex-start;
`;
