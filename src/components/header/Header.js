import React from 'react';
import './header.scss';
import profileImage from '../../assets/images/profile-image.png';

const Header = () => {
    return(
        <div className="header">
                <div className="container-inside">
                    <div className="header-inside">
                        <div className="header-inside__notifaction">
                            <span className="header-inside__notifaction-icon"></span>
                        </div>
                        <div className="header-inside__user">
                             <img alt="" src={profileImage}></img>
                        </div>
                    </div>
                </div>
        </div>  
    );
}

export default Header;