import '../../../styles/app.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from "styled-components";
import About from "../../../containers/pages/about/about.page";
import { Timer } from "../Timer/Timer.component";
import Cookies from "../../../containers/pages/cookies/cookies.page";
import {useThemeColors} from "../../hooks/useThemeColors.hook";

function App() {
  const colors = useThemeColors();
  const AppCanvas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
  `;

  return (
    <AppCanvas>
      <Timer />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cookies">
          <Cookies />
        </Route>
      </Switch>
    </AppCanvas>
  );
}

export default App;
