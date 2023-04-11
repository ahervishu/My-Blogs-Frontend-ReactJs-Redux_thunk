import "./App.css";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";

import { createBrowserHistory } from "history";
import Home from "./components/Dashboard/Home";
import Profile from "./components/Profile/Profile";
import { Blog } from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import { NewBlog } from "./components/WriteNew/NewBlog";
import { PersonalInfo } from "./components/Profile/PersonalInfo/PersonalInfo";
import { About } from "./components/Profile/About/About";
import { useEffect, useState } from "react";
import { UserProfile } from "./components/userProfile.js/UserProfile";
import Notifications from "./components/Notifications/Notifications";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/blogs/:username/:id" element={<Blog />} />
          <Route
            path="/blogs/:username/:userId/writeNew"
            element={<NewBlog />}
          />
          <Route path="/user/:username/:id" element={<UserProfile />} />
          <Route path="/notification" element={<Notifications />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
