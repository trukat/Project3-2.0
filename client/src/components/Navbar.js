import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  console.log(props);
  let links = (info) => {
    console.log(info.props);

    if (info.props) {
      return (
        <>
          <Link to="/">Home</Link>
          <Link onClick={props.logout} to="/">
            Logout
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/login">login</Link>
          <Link to="/register">register</Link>
        </>
      );
    }
  };
  return (
    <div>
      <nav>{links(props)}</nav>
    </div>
  );
};

export default Navbar;
