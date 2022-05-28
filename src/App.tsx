import React, { createContext, useState } from "react";
import { ContentWrapper, GlobalStyle } from "./App.styles";
import { Main } from "./Components/Main/Main";
import { Cursor } from "./Components/Cursor/Cursor";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import { useBottomScrollListener } from "react-bottom-scroll-listener";

export interface IContext {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<IContext | undefined>(undefined);
function App() {
  const [sidebarState, setSidebarState] = useState<boolean>(false);
  const [isChanging, setIsChanging] = useState<boolean>(false);
  const [swiper, setSwiper] = useState<any>();

  window.addEventListener("wheel", (event) => {
    if (event.deltaY < 0) {
      setIsChanging(true);
      setTimeout(() => {
        swiper.slidePrev(1000);
      }, 1000);
      setTimeout(() => {
        setIsChanging(false);
      }, 2000);
    } else if (event.deltaY > 0) {
      setIsChanging(true);
      setTimeout(() => {
        swiper.slideNext(1000);
      }, 1000);
      setTimeout(() => {
        setIsChanging(false);
      }, 2000);
    }
  });

  window.addEventListener("scroll", () => {
    if (window.pageYOffset === 0) {
      setIsChanging(true);
      setTimeout(() => {
        swiper.slidePrev(1000);
      }, 1000);
      setTimeout(() => {
        setIsChanging(false);
      }, 2000);
    }
  });

  useBottomScrollListener(() => {
    setIsChanging(true);
    setTimeout(() => {
      swiper.slideNext(1000);
    }, 1000);
    setTimeout(() => {
      setIsChanging(false);
    }, 2000);
  });

  return (
    <>
      <Cursor />
      <Context.Provider
        value={{ sidebar: sidebarState, setSidebar: setSidebarState }}
      >
        <GlobalStyle />
        <Sidebar />
        <ContentWrapper isChanging={isChanging}>
          <Swiper
            style={{ height: "100%" }}
            slidesPerView={1}
            noSwiping={true}
            allowTouchMove={false}  
            direction="horizontal"
            spaceBetween={30}
            onReachEnd={() => console.log("koniec")}
            modules={[Mousewheel, Pagination]}
            onSwiper={(swiper) => {
              setSwiper(swiper);
              console.log(swiper);
            }}
          >
            <SwiperSlide>
              <Main />
            </SwiperSlide>
            <SwiperSlide>1</SwiperSlide>
          </Swiper>
        </ContentWrapper>
      </Context.Provider>
    </>
  );
}

export default App;
