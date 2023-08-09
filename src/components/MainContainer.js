import React from "react";
import PropTypes from "prop-types";

import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";

import { getPageTitle } from "utils/seo";

import { TOAST_DISMISS_TIMEOUT } from "settings/constants/toast";

import "react-toastify/dist/ReactToastify.css";

const MainContainer = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <Helmet>
        <title>{getPageTitle(pathname)}</title>
      </Helmet>

      <div>{children}</div>

      <ToastContainer
        position="top-center"
        autoClose={TOAST_DISMISS_TIMEOUT}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        transition={Zoom}
      />
    </>
  );
};

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
