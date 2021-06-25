import React from 'react';
import { TimerComponent } from "./core/components/Timer/Timer.component";
import './styles/app.css';
import styled from "styled-components";

function App() {
  const AppCanvas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
  `;

  return (
    <AppCanvas>
      <TimerComponent/>
    </AppCanvas>
  );
}

export default App;
