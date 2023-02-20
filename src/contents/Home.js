import React, { Component } from 'react'
import profilepic from  '../img/Smartfarm2.jpg'
import ReactTypingEffect from 'react-typing-effect'


class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} alt="profile" className="profilepic" />
                <ReactTypingEffect text={['SMART-FARM','Nhóm 13 IoT']} speed={80} eraseDelay={180} className="typingeffect" />
            </div>
        )
    }
}

export default Home;
