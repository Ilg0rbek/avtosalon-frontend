import React from "react";
import { SiedbarWrapperFluid } from "./siedbar.styles";
import Left from "./left";
import Right from "./right";

const Sidebar = () => {
  return (
    <SiedbarWrapperFluid>
      <Left />
      <Right />
    </SiedbarWrapperFluid>
  );
};

export default Sidebar;
