import React, { useEffect, useRef } from "react";
import { CursorDiv } from "../../App.styles";

export const Cursor: React.FC = () => {
  const ball = useRef<HTMLDivElement>(null)!;

  let mouseX = 0;
  let mouseY = 0;

  let ballX = 0;
  let ballY = 0;

  let speed = 0.2;

  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    let distX = mouseX - ballX;
    let distY = mouseY - ballY;

    ballX = ballX + distX * speed;
    ballY = ballY + distY * speed;

    ball!.current!.style.left = ballX + "px";
    ball!.current!.style.top = ballY + "px";

    requestAnimationFrame(animate);
  };

  document.addEventListener("mousemove", (event) => {
    mouseX = event.pageX;
    mouseY = event.pageY;
  });
  return <CursorDiv ref={ball} />;
};
