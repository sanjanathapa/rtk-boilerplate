import React from "react";

import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { api } from "api";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import history from "providers/history";

import MainContainer from "components/MainContainer";
import MainRoute from "router";

import "./App.css";

const App = () => {
  return (
    <ApiProvider api={api}>
      <HelmetProvider>
        <Router history={history}>
          <MainContainer>
            <MainRoute />
          </MainContainer>
        </Router>
      </HelmetProvider>
    </ApiProvider>
  );
};

export default App;
