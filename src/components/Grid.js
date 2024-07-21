import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  position: relative;
  width: 1000px;
  height: 900px;
  border: 2px solid black;  /* Add border around the grid */
  background-size: 50px 50px;
  background-image: linear-gradient(to right, lightgray 1px, transparent 1px),
                    linear-gradient(to bottom, lightgray 1px, transparent 1px);
`;

const Grid = ({ children }) => {
  return <GridContainer>{children}</GridContainer>;
};

export default Grid;
