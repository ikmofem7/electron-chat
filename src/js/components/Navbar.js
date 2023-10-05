import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { asyncLogoutUser } from "../reducer/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user);
  const handleLogoutUser = () => {
    dispatch(asyncLogoutUser());
  };
  return (
    <>
      <div className="chat-navbar">
        <nav className="chat-navbar-inner">
          <div className="chat-navbar-inner-left">
            <button
              onClick={() => navigate(-1)}
              className="btn btn-outline-primary ml-2"
            >
              Back
            </button>
            <Link to="/settings" className="btn btn-outline-success ml-2">
              Settings
            </Link>
          </div>
          <div className="chat-navbar-inner-right">
            <span className="logged-in-user">Hi User</span>
            <Link to="/" className="btn  btn-outline-success ml-2">
              Login
            </Link>
            {user && (
              <button
                onClick={handleLogoutUser}
                className="btn  btn-outline-danger ml-2"
              >
                Logout
              </button>
            )}
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};
export { Navbar };
