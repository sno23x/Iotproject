import React, { Component } from 'react'
import profilepic from  '../img/Smartfarm2.jpg'
import ReactTypingEffect from 'react-typing-effect'
// import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} alt="profile" className="profilepic" />
                <ReactTypingEffect text={['SMART-FARM','Nhóm 13 IoT']} speed={80} eraseDelay={180} className="typingeffect" />
                {/* <Link to="/Login">
                <button type="submit">Đăng Nhập</button></Link>
                <Link >Tạo tài khoản?</Link> */}
            </div>
            
        )
    }
}

export default Home;
