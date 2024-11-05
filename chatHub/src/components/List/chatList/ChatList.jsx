import "./chatList.css";
import search from "../../../images/search.png";
import plus from "../../../images/plus.png";
import minus from "../../../images/minus.png";
import avatar from "../../../images/avatar.png";
import React, { useState } from "react";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src={search} alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          className="add"
          src={addMode ? minus : plus}
          alt="" //When you use {minus} and {plus}, you're treating minus and plus as objects, but src expects a string (the file path or URL). This causes the images to not be displayed correctly
          onClick={() => setAddMode((prev) => !prev)} //When you call the setAddMode function with an arrow function, React passes the current (or "previous") state as an argument to that function
        />
      </div>
      <div className="item">
        <img src={avatar} alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src={avatar} alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src={avatar} alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
