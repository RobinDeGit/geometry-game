import React, { useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const ShapeContainer = styled(animated.div)`
  width: 50px;
  height: 50px;
  background-color: lightblue;
  border: 2px solid darkblue;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: center;
`;

function Shape() {
  const gridSize = 500;
  const stepSize = 50;
  const shapeSize = 50;

  const [rotation, setRotation] = useState(0);
  const [translation, setTranslation] = useState({ x: 0, y: 0 });

  const { transform } = useSpring({
    transform: `translate(${translation.x}px, ${translation.y}px) rotate(${rotation}deg)`,
  });

  const handleRotate = () => {
    setRotation(rotation + 45);
  };

  const handleTranslate = (direction) => {
    setTranslation((prev) => {
      const newX = prev.x + (direction === 'right' ? stepSize : direction === 'left' ? -stepSize : 0);
      const newY = prev.y + (direction === 'down' ? stepSize : direction === 'up' ? -stepSize : 0);

      // Ensure the new position is within the grid boundaries
      const boundedX = Math.min(Math.max(newX, 0), gridSize - shapeSize);
      const boundedY = Math.min(Math.max(newY, 0), gridSize - shapeSize);

      return { x: boundedX, y: boundedY };
    });
  };

  return (
    <>
      <ShapeContainer style={{ transform }} />
      <button id="rotateButton" onClick={handleRotate} style={{ display: 'none' }}>Rotate</button>
      <button id="upButton" onClick={() => handleTranslate('up')} style={{ display: 'none' }}>Up</button>
      <button id="downButton" onClick={() => handleTranslate('down')} style={{ display: 'none' }}>Down</button>
      <button id="leftButton" onClick={() => handleTranslate('left')} style={{ display: 'none' }}>Left</button>
      <button id="rightButton" onClick={() => handleTranslate('right')} style={{ display: 'none' }}>Right</button>
    </>
  );
}

export default Shape;
