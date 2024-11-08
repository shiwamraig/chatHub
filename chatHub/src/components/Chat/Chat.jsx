
import Emojipicker from "emoji-picker-react";
import avatar from "../../images/avatar.png";
import phone from "../../images/phone.png";
import video from "../../images/video.png";
import info from "../../images/info.png";
import eemoji from "../../images/emoji.png";
import img from "../../images/img.png";
import camera from "../../images/camera.png";
import mic from "../../images/mic.png";
import img1 from "../../images/img1.jpg";
import "./Chat.css";
import { useEffect, useRef,useState } from "react";
const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null)
  
  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"});
  },[])

  const handleEmoji =(e)=>{
    setText((prev)=>prev+e.emoji);
    setOpen(false)
}
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={avatar} alt="" />
          <div className="texts">
            <span>Jan doe</span>
            <p>sfslfsfs sfsfsfs sfsfsfsf .</p>
          </div>
        </div>
        <div className="icons">
          <img src={phone} alt="" />
          <img src={video} alt="" />
          <img src={info} alt="" />
        </div>
      </div>

      <div className="center">
      <div className="message">
        <img src={avatar} alt="" />
        <div className="texts">
          <p>
            sfsfsfsfsfsfsf fgdfg rgerg rg rg drg drg drg drgr gr rrrrrr.
             rdgrdgr dgdgdgdgg regr  rregreg ergregeeewg rgregrgerrrrg
             dgdgdgdgrger r r rgrge gregeggregrg rrrggeg.
          </p>
          <span>
            1 min ago
          </span>
        </div>
      </div>
      <div className="message own">
        <div className="texts">
          <p>
            sfsfsfsfsfsfsf fgdfg rgerg rg rg drg drg drg drgr gr rrrrrr.
             rdgrdgr dgdgdgdgg regr  rregreg ergregeeewg rgregrgerrrrg
             dgdgdgdgrger r r rgrge gregeggregrg rrrggeg.
          </p>
          <span>
            1 min ago
          </span>
        </div>
      </div>

      <div className="message">
        <img src={avatar} alt="" />
        <div className="texts">
          <p>
            sfsfsfsfsfsfsf fgdfg rgerg rg rg drg drg drg drgr gr rrrrrr.
             rdgrdgr dgdgdgdgg regr  rregreg ergregeeewg rgregrgerrrrg
             dgdgdgdgrger r r rgrge gregeggregrg rrrggeg.
          </p>
          <span>
            1 min ago
          </span>
        </div>
      </div>
      <div className="message own">
        <div className="texts">
          <p>
            sfsfsfsfsfsfsf fgdfg rgerg rg rg drg drg drg drgr gr rrrrrr.
             rdgrdgr dgdgdgdgg regr  rregreg ergregeeewg rgregrgerrrrg
             dgdgdgdgrger r r rgrge gregeggregrg rrrggeg.
          </p>
          <span>
            1 min ago
          </span>
        </div>
      </div>
      <div className="message">
        <img src={avatar} alt="" />
        <div className="texts">
          <p>
            sfsfsfsfsfsfsf fgdfg rgerg rg rg drg drg drg drgr gr rrrrrr.
             rdgrdgr dgdgdgdgg regr  rregreg ergregeeewg rgregrgerrrrg
             dgdgdgdgrger r r rgrge gregeggregrg rrrggeg.
          </p>
          <span>
            1 min ago
          </span>
        </div>
      </div>
      <div className="message own">
        <div className="texts">
          <img src={img1} alt="" />
          <p>
            sfsfsfsfsfsfsf fgdfg rgerg rg rg drg drg drg drgr gr rrrrrr.
             rdgrdgr dgdgdgdgg regr  rregreg ergregeeewg rgregrgerrrrg
             dgdgdgdgrger r r rgrge gregeggregrg rrrggeg.
          </p>
          <span>
            1 min ago
          </span>
        </div>
      </div>
      <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src={img} alt="" />
          <img src={camera} alt="" />
          <img src={mic} alt="" />
        </div>
        <input  type="text" placeholder="Type a message..." value={text} onChange={(e)=>setText(e.target.value)} />
        <div className="emoji">
          <img src={eemoji} alt="" onClick={() => setOpen((prev) => !prev)} />
          <div className="picker">
          <Emojipicker open={open} onEmojiClick={handleEmoji} />
          </div>
            
          {/* here instead of onClick onEmojiClick is used */}
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
