import React from 'react';
import Search from '../search/Search';
import Sturucture from '../sturucture/Sturucture';
import Persons from '../persons/Persons';
import './main.scss';


const Main = () => {
    return (
        <div className="main">
            <div className="container-inside">
                <Search/>
                <div className="main-persons">
                     <Sturucture/>
                     <Persons/>
                </div>

            </div>
        </div>
    );
};

export default Main;