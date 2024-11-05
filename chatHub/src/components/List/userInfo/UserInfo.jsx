import React from 'react'
import avatar from '../../../images/avatar.png'
import more from '../../../images/more.png'
import video from '../../../images/video.png'
import edit from '../../../images/edit.png'
import './userInfo.css'
const UserInfo = () => {
  return (
    <div className="userInfo">
        <div className="user">
            <img src={avatar} alt="" />
            <h2>John Doe</h2>
        </div>
        <div className="icons">
            <img src={more} alt="" />
            <img src={video} alt="" />
            <img src={edit} alt="" />
        </div>
    </div>
  )
}

export default UserInfo
