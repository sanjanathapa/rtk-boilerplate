import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import {
  HomePage,
  ErrorPage,
  DashboardPage,
  SettingsPage,
  HelpPage,
} from "pages";

import routes from "router/routes";

const MainRoute = () => {
  // Initial page, we can change this based on user role in future
  const defaultPath = routes.app.home;
  const redirectPath = defaultPath;

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={redirectPath} />}
      />
      <Route exact path="/" element={<HomePage />} />
      <Route exact path={routes.app.home} element={<HomePage />} />
      <Route exact path={routes.app.dashboard} element={<DashboardPage />} />
      <Route exact path={routes.app.settings} element={<SettingsPage />} />
      <Route exact path={routes.app.help} element={<HelpPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default MainRoute;
