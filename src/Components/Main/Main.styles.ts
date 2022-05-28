import { Link } from "react-router-dom";
import styled from "styled-components";
import { CUBIC, GRAY_TEXT, LINE_HEIGHT_P } from "../../App.styles";

export const ContainerContent = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 786px) {
    padding-bottom: 3rem;
  }
`;
export const ContainerText = styled.div`
  width: 70%;
  height: 70%;
  @media screen and (max-width: 786px) {
    height: 100%;
  }
`;

export const MainTitle = styled.h1`
  font-size: 3rem;
`;

export const MainSubtitle = styled.h1`
  font-size: 2rem;
  letter-spacing: 10px;
`;

export const MainParagpraph = styled.p`
  color: ${GRAY_TEXT};
  line-height: ${LINE_HEIGHT_P};
`;

export const ContactButton = styled.span`
  color: ${GRAY_TEXT};
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  font-size: 1.5rem;
  letter-spacing: 10px;
  margin-top: 2rem;
  transition: 0.5s ${CUBIC};

  @media screen and (max-width: 786px) {
    letter-spacing: 3px;
  }

  > img {
    transform: translate(0px);
    transition: 0.5s ${CUBIC};
    transition-delay: 0.5s;
  }
  &:hover {
    letter-spacing: 15px;

    > img {
      transform: translate(20px);
    }
  }
`;
