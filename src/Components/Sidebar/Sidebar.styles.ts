import styled from "styled-components";
import { motion } from "framer-motion";

export const SidebarWrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: white;
  color: black;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 3rem;
  z-index: 998;
`;

export const CloseMenu = styled.span`
  font-weight: 500;
  font-size: 3rem;
`

export const SidebarContent = styled.div`
  height: 100%;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SidebarButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 2rem;
  > a {
    font-weight: 600;
    font-size: 6rem;
  }
`;

export const SidebarInfo = styled.div`
  font-size: 1.5rem;
`;

export const NavLink = styled.span`
    display: block;
    text-decoration: none;
    font-weight: 400;
    font-size: 4rem;
    width: fit-content;
    background: linear-gradient(
        90deg,
        currentColor calc(100% / 3),
        transparent 0 calc(200% / 3),
        currentColor 0
      )
      var(--d, 100%) 100% /300% 2px no-repeat;

    &:hover {
      --d: 0%;
      transition: 0.5s;
    }
`;