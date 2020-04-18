import React, { useState } from "react";
import { Side, Label, Lab } from "./SideBarStyle";
import {
  SideComponent1,
  SideComponent2,
  SideComponent3,
} from "./SideBarComponent";

interface BooleanState {
  labe1: Boolean;
  labe2: Boolean;
  labe3: Boolean;
}

const SideBar = () => {
  // const [state, setState] = useState<BooleanState | any>({
  //   labe1: false,
  //   labe2: false,
  //   labe3: false,
  // });
  return (
    <Side>
      <Lab>
        <input type='checkbox' name='lab' id='lab1' />
        <Label htmlFor='lab1'>Browse Category</Label>
        <SideComponent1 show='show' />
      </Lab>
      <Lab>
        <input type='checkbox' name='lab' id='lab2' />
        <Label htmlFor='lab2'>Type Of Wear</Label>
        <SideComponent2 show='show' />
      </Lab>
      <Lab>
        <input type='checkbox' name='lab' id='lab3' />
        <Label htmlFor='lab3'>Category wear</Label>
        <SideComponent3 show='show' />
      </Lab>
    </Side>

    // <Side>
    //   <Lab>
    //     <input type='radio' name='lab' id='lab1' />
    //     <Label
    //       htmlFor='lab1'
    //       onClick={() => setState({ ...state, labe1: !state.labe1 })}
    //     >
    //       Browse Category
    //     </Label>
    //     {state.labe1 && <SideComponent1 show='show' />}
    //   </Lab>
    //   <Lab>
    //     <input type='radio' name='lab' id='lab2' />
    //     <Label
    //       htmlFor='lab2'
    //       onClick={() => setState({ ...state, labe2: !state.labe2 })}
    //     >
    //       Type Of Wear
    //     </Label>
    //     {state.labe2 && <SideComponent2 show='show' />}
    //   </Lab>
    //   <Lab>
    //     <input type='radio' name='lab' id='lab3' />
    //     <Label
    //       htmlFor='lab3'
    //       onClick={() => setState({ ...state, labe3: !state.labe3 })}
    //     >
    //       Category wear
    //     </Label>
    //     {state.labe3 && <SideComponent3 show='show' />}
    //   </Lab>
    // </Side>
  );
};

export default SideBar;
