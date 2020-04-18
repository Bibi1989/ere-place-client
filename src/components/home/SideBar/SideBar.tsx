import React from "react";
import { Side, Label, Lab } from "./SideBarStyle";
import {
  SideComponent1,
  SideComponent2,
  SideComponent3,
} from "./SideBarComponent";

const SideBar = () => {
  return (
    <Side>
      <Lab>
        <input type='radio' name='lab' id='lab1' />
        <Label htmlFor='lab1'>Browse Category</Label>
        <SideComponent1 show='show' />
      </Lab>
      <Lab>
        <input type='radio' name='lab' id='lab2' />
        <Label htmlFor='lab2'>Type Of Wear</Label>
        <SideComponent2 show='show' />
      </Lab>
      <Lab>
        <input type='radio' name='lab' id='lab3' />
        <Label htmlFor='lab3'>Category wear</Label>
        <SideComponent3 show='show' />
      </Lab>
      {/* 
      
       */}
    </Side>
  );
};

export default SideBar;
