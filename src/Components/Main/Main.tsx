import React from "react";
import {
  BoxFive,
  BoxFour,
  BoxOne,
  BoxThree,
  BoxTwo,
  GridSystem,
} from "../../App.styles";
import { Navigation } from "../Navigation/Navigation";

import image1 from "../../Assets/desktop-image-hero-1.jpg";
import image2 from "../../Assets/image-about-dark.jpg";
import image3 from "../../Assets/image-about-light.jpg";
import {
  ContactButton,
  ContainerContent,
  ContainerText,
  MainParagpraph,
  MainSubtitle,
  MainTitle,
} from "./Main.styles";

import iconArrow from "../../Assets/icon-arrow.svg";

export const Main: React.FC = () => {
  return (
    <GridSystem>
      <BoxOne>
        <Navigation />
        <img src={image1} alt="" />
      </BoxOne>
      <BoxTwo>
        <ContainerContent>
          <ContainerText>
            <MainTitle>Discover innovative ways to decorate</MainTitle>
            <MainParagpraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              laborum ipsa non voluptatum consequatur vel, cupiditate quia, quos
              omnis hic assumenda earum temporibus aliquam in tempore
              reprehenderit error dolore odio tenetur veritatis aliquid
              laudantium eligendi consectetur? Consequuntur ut dolor molestias
              suscipit dolorum nisi, tempore asperiores aliquid ullam neque
              nobis harum.
            </MainParagpraph>
            <ContactButton>
              <span>NAPISZ DO MNIE</span>
              <img src={iconArrow} alt="" />
            </ContactButton>
          </ContainerText>
        </ContainerContent>
      </BoxTwo>
      <BoxThree>
        <img src={image2} alt="" />
      </BoxThree>
      <BoxFour>
        <ContainerContent>
          <ContainerText>
            <MainSubtitle>ABOUT MY JOB</MainSubtitle>
            <MainParagpraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur ut quisquam voluptatibus doloremque molestias impedit.
              Error voluptatem omnis debitis, eum molestias, dolores ducimus
              unde ea vel distinctio cum laborum dolor sed sit ipsa culpa. 
            </MainParagpraph>
          </ContainerText>
        </ContainerContent>
      </BoxFour>
      <BoxFive>
        <img src={image3} alt="" />
      </BoxFive>
    </GridSystem>
  );
};
