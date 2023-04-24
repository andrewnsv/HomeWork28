import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const setActive = ({isActive}) => isActive ? 'active-link' : '';

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/" className={setActive}>Home</NavLink>
        <NavLink to="/episodes" className={setActive}>Episodes</NavLink>
        <NavLink to="/heroes" className={setActive}>Heroes</NavLink>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
