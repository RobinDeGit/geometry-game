import React from 'react';
import styled from 'styled-components';
import Grid from './components/Grid';
import Shape from './components/Shape';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Button = styled.button`
  margin: 5px 0;
`;

function App() {
  return (
    <Container>
      <Grid>
        <Shape />
      </Grid>
      <Controls>
        <Button onClick={() => document.getElementById('rotateButton').click()}>Rotate</Button>
        <Button onClick={() => document.getElementById('upButton').click()}>Up</Button>
        <Button onClick={() => document.getElementById('downButton').click()}>Down</Button>
        <Button onClick={() => document.getElementById('leftButton').click()}>Left</Button>
        <Button onClick={() => document.getElementById('rightButton').click()}>Right</Button>
      </Controls>
    </Container>
  );
}

export default App;
