import React from 'react';
import './sidebar.scss';
import profileImage from '../../assets/images/profile-image.png';


const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="sidebar__user">
                <div className="sidebar__user-profile">
                    <img alt="" src={profileImage}></img>
                </div>
                <div className="sidebar__user-info">
                    <p className="sidebar__user-info-name">Pasha Life</p>
                    <p className="sidebar__user-info-email">Pashalife@mail.com</p>
                </div>
            </div>

            <div className="sidebar__nav">
                <ul>
                    <li className="active"><a href="#1"><span className="nav-icon dashboard-icon"></span> Dashboard</a></li>
                    <li><a href="#2"><span className="nav-icon tasks-icon"></span> Tasks</a></li>
                    <li><a href="#3"><span className="nav-icon email-icon"></span> Email</a></li>
                    <li><a href="#4"><span className="nav-icon contact-icon"></span> Contacts</a></li>
                    <li><a href="#5"><span className="nav-icon chat-icon"></span> Chat</a></li>
                    <li><a href="#6"><span className="nav-icon deals-icon"></span> Deals</a></li>
                    <li><a href="#7"><span className="nav-icon settings-icon"></span> Settings</a></li>
                </ul>
            </div>
        </div>
    ); 
}

export default Sidebar;