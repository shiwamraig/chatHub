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
          alt=""
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      
      {/* Chat items */}
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
          <span>John Smith</span>
          <p>Good morning</p>
        </div>
      </div>
      <div className="item">
        <img src={avatar} alt="" />
        <div className="texts">
          <span>Emily Clark</span>
          <p>How are you?</p>
        </div>
      </div>
      <div className="item">
        <img src={avatar} alt="" />
        <div className="texts">
          <span>Michael Johnson</span>
          <p>Let's meet up</p>
        </div>
      </div>
      <div className="item">
        <img src={avatar} alt="" />
        <div className="texts">
          <span>Sarah Lee</span>
          <p>See you soon!</p>
        </div>
      </div>
      <div className="item">
        <img src={avatar} alt="" />
        <div className="texts">
          <span>David Brown</span>
          <p>Take care</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
