import React, { useRef } from "react";
import Sketch from "react-p5";

const Visuals = () => {
  const amplitude = 100;
  const wavelength = 40;
  const offsetX = useRef(0);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(200);
    p5.noFill();

    p5.beginShape();
    for (let x = 0; x < p5.width; x++) {
      let angle = (p5.TWO_PI / wavelength) * x;
      let y = p5.height / 2 + amplitude * p5.sin(angle + offsetX.current);
      p5.vertex(x, y);
    }
    p5.endShape();

    offsetX.current += 0.05;
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Visuals;
