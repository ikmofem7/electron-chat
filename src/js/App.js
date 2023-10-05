import React, { useEffect } from "react";
import { Home } from "./containers/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Settings } from "./containers/Settings";
import { Register } from "./containers/Register";
import { Welcome } from "./containers/Welcome";
import { Chat } from "./containers/Chat";
import { useDispatch } from "react-redux";
import { asyncAuthStateChanged } from "./reducer/authSlice";
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncAuthStateChanged());
  }, []);
  return (
    <div className="content-wrapper">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Welcome />} />
            <Route path="home" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="settings" element={<Settings />} />
            <Route path="chat/:id" element={<Chat />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
