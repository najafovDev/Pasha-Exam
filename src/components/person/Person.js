import React from 'react';
import './person.scss';
import profileImage from '../../assets/images/profile-image.png';
import viewSvg from '../../assets/icons/view-icon.svg';
import emailSvg from '../../assets/icons/email-icon.svg';
import { Link } from "react-router-dom";


const Person = ({ children }) => {
    const [isOpen, setOpen] = React.useState(false);

    return (
     <div>
        <div className="person">
        <div onClick={() => setOpen(!isOpen)} className="person__click">
        <div className="person__profile">
                    <div className="person__profile-picture">
                        <span>3A</span>
                        <img alt="" src={profileImage}></img>
                    </div>
                    <div className="person__profile-info">
                        <p className="person__profile-info-name">Toghrul Rajab</p>
                        <p className="person__profile-info-email">toghrulrajab@gmail.com</p>
                    </div>
                </div>

                <div className="person__tags">
                     <span className='tag tag-fiolet'>2222</span>
                     <span className='tag tag-blue'>2222</span>
                     <span className='tag tag-green'>2222</span> 
                     <span className='tag tag-yellow'>2222</span>
                </div>

                <div className="person__company">
                    <div className="person__company__structure">
                        <p className="person__company-head">Struktur</p>
                        <p className="person__company-info">Marketinq</p>
                    </div>
                    <div className="person__company-border"></div>
                    <div className="person__company__position">
                        <p className="person__company-head">Vəzifə</p>
                        <p className="person__company-info">Direktor</p>
                    </div>
                </div>

                </div>

                <div className="person__buttons">
                <Link to="/persondetails">
                        <button className="person__buttons-button"> 
                            <img alt="" src={viewSvg}></img> Bax
                        </button>
                </Link>
                        <button className="person__buttons-button"> 
                            <img alt="" src={emailSvg}></img> Mail at
                        </button>
                </div>
            
      </div>
               
               <div className={`sub-item ${!isOpen ? "collapsed" : ""}`}>
                    <div className="sub-content">{children}</div>
                </div>
     </div>

      
    );
  };



export default Person;