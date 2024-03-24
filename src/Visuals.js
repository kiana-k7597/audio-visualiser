import React from "react";
import Sketch from "react-p5";

const Visuals = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(200);
    p5.ellipse(p5.width / 2, p5.height / 2, 50, 50);
  };

  return (
    <Sketch
      setup={setup}
      draw={draw}
      role="img"
      aria-label="Music visualiser"
    />
  );
};

export default Visuals;
