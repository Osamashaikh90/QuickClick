/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const HideNavLayout = ({ children }) => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    if (location.pathname === "/login") {
      // console.log(location.pathname);
      setShowNav(false);
    } else if (location.pathname === "/register") {
      setShowNav(false);
    } else if (location.pathname === "/recovery") {
      setShowNav(false);
    } else if (location.pathname === "/reset") {
      setShowNav(false);
    } else if (location.pathname === "/profile") {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [location]);

  return <div>{showNav && children}</div>;
};

export default HideNavLayout;
