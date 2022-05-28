import React, { useContext } from "react";
import {
  LogoWrapper,
  Menu,
  NavigationContainer,
  NavigationWrapper,
} from "./Navigation.styles";

import Logo from "../../Assets/LOGOTYPSVG.svg";
import { Context} from "../../App";

export const Navigation: React.FC = () => {
  const context = useContext(Context);
  return (
    <NavigationWrapper>
      <LogoWrapper>
        <img src={Logo} alt="Logo" />
      </LogoWrapper>
      <NavigationContainer>

      </NavigationContainer>
      <NavigationContainer>
        <Menu
          onClick={() => context?.setSidebar(!context.sidebar)}
        >
           MENU
        </Menu>
      </NavigationContainer>
    </NavigationWrapper>
  );
};
