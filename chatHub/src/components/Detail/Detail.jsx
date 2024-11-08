import "./Detail.css";
import avatar from "../../images/avatar.png";
import arrowUp from "../../images/arrowUp.png";
import img1 from "../../images/img1.jpg";
import arrowDown from "../../images/arrowDown.png";
import download from "../../images/download.png";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src={avatar} alt="" />
        <h2>Jan Doe</h2>
        <p>Lorem ipsum dolor sit amet, quos?</p>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src={arrowUp} alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy and help</span>
            <img src={arrowUp} alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src={arrowDown} alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src={img1} alt="" />
                <span>photo_2024.png</span>
              </div>
              <img src={download} alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src={img1} alt="" />
                <span>photo_2024.png</span>
              </div>
              <img src={download} alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src={img1} alt="" />
                <span>photo_2024.png</span>
              </div>
              <img src={download} alt="" className="icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src={arrowUp} alt="" />
          </div>
        </div>
      </div>
      <button>Block User</button>
      <button className="logout">Logout</button>
    </div>
  );
};

export default Detail;
