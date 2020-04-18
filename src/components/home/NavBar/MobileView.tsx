import React from "react";
import { Input, Menu, Icon, Label, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "./NavBarStyle";

const MobileView = ({ handleInput }: any) => {
  return (
    <Div className='nav-cart'>
      <Logo className='logo'>ERE FASHION</Logo>
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
      <div className='nav-list'>
        <Input
          onChange={handleInput}
          icon='search'
          iconPosition='left'
          placeholder='Search...'
          className='search'
        />
      </div>
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
  min-height: 100%;
  align-items: flex-start;

  .login,
  .register,
  .search,
  .logo {
    margin-bottom: 2em;
  }

  .logo {
    font-size: 2.5em;
    padding-top: 1em;
  }
`;
