import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__wrapper--search">
          <input type="text" placeholder="Seach..." />
          <SearchOutlinedIcon style={{ cursor: "pointer" }} />
        </div>
        <div className="navbar__wrapper--options">
          <div className="navbar__wrapper--options-item">
            <LanguageOutlinedIcon className="icon" />
            <p>English</p>
          </div>
          <div className="navbar__wrapper--options-item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="navbar__wrapper--options-item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="navbar__wrapper--options-item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="navbar__wrapper--options-item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="navbar__wrapper--options-item">
            <img
              src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
