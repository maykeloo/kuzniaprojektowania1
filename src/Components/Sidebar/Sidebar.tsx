import React, { useContext } from "react";
import { Context } from "../../App";
import { AnimatePresence } from "framer-motion";
import { CloseMenu, NavLink } from "..//Sidebar/Sidebar.styles";
import {
  SidebarButtons,
  SidebarContent,
  SidebarWrapper,
} from "./Sidebar.styles";

const sidebarVariants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.62, 0.05, 0.01, 0.99],
      type: "tween",
    },
  },
  exit: {
    opacity: 0,
  },
};

export const Sidebar = () => {
  const context = useContext(Context);

  return (
    <AnimatePresence>
      {context?.sidebar && (
        <SidebarWrapper
          variants={sidebarVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="sidebar"
        >
          <SidebarContent>
          <CloseMenu onClick={() => context.setSidebar(false)}>CLOSE</CloseMenu>
            <SidebarButtons>
              <NavLink onClick={() => context.setSidebar(false)}>strona główna</NavLink>
              <NavLink onClick={() => context.setSidebar(false)}>usługi</NavLink>
              <NavLink onClick={() => context.setSidebar(false)}>o mnie</NavLink>
              <NavLink onClick={() => context.setSidebar(false)}>kontakt</NavLink>
              <div className="sidebar__info">
                <p>
                  currently designing at <br />
                  <em>Trade Software & Consult</em>
                </p>
                <p>
                  based near to Tarnow in <br /> Lesser Poland, Poland
                </p>
              </div>
            </SidebarButtons>
          </SidebarContent>
        </SidebarWrapper>
      )}
    </AnimatePresence>
  );
};
