import React from 'react';
import './persondetails.scss';
import Person from '../person/Person';
import Persontabs from '../persontabs/Persontabs';
import { Link } from "react-router-dom";


const Persondetails = () => {
    return (
        <div className="persondetails">
            <div className="container-inside">
                <div className="persondetails__breadcrumb">
                    <Link to="/">
                        <span className="back-icon"></span> Geri qayıt
                    </Link>
                </div>

                <div className="persondetails__wrapper">
                    <Person/>
                    <Persontabs/>
                </div>
            </div>
        </div>
    );
}


export default Persondetails;