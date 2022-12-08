import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/auth.context";
import "./Navbar.css";

const Navbar = () => {

  const {
    user, setUser, handleLogOut
  } = useContext(AppContext)



  return (
    <nav>
      <Link to={"/"} className="nav__projectName">
        Phin Security
      </Link>

      <div className="nav__authLinks">
        {user ? (
          <>
           <Link to={"/todos"}> Todos</Link>
            <button className="nav-logoutbtn" onClick={handleLogOut}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="authLink">
              Log In
            </Link>
            <Link to="/signup" className="authLink">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
