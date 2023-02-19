import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  // useEffect(() => {
  //   alert(location.pathname);
  // }, [location]);

  return (
    <div>
      <NavLink to="/">Home</NavLink> | <NavLink to="/sobre">Sobre</NavLink> |{" "}
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}

export default Header;
