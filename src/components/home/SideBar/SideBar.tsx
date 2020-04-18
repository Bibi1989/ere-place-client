import React from "react";
import { Side, Label } from "./SideBarStyle";
import {
  SideComponent1,
  SideComponent2,
  SideComponent3,
} from "./SideBarComponent";

const SideBar = () => {
  return (
    <Side>
      <div>
        <input type='radio' id='lab1' />
        <Label>Browse Category</Label>
      </div>
      <div>
        <input type='radio' id='lab2' />
        <Label>Type Of Wear</Label>
      </div>
      <div>
        <input type='radio' id='lab3' />
        <Label>Category wear</Label>
      </div>
      {/* <SideComponent1 />
      <SideComponent2 />
      <SideComponent3 /> */}
    </Side>
  );
};

export default SideBar;
