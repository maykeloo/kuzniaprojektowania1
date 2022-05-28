import styled from "styled-components";


export const NavigationWrapper = styled.div`
  position: absolute;
  top: 3rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;

  @media screen and (min-width: 786px) {
    padding-left: 10rem;
    gap: 5rem;
  }
`;
export const NavigationContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const LogoWrapper = styled.div`
  > img {
    width: 5rem;
  }
`;

export const Menu = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  position: absolute;
  right: 2rem;
  top: 0;
  z-index: 999;
`;