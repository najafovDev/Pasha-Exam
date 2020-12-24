import React from 'react';
import Person from '../person/Person';
import './persons.scss';


const Persons = () => {

    return (
                <div className="persons">
                        <Person>
                            <div className="persons__second-child">
                                <Person> 
                                    <div className="persons__third-child">
                                        <Person/>
                                    </div>
                                </Person>
                                
                                <Person> 
                                    <div className="persons__third-child">
                                        <Person/>
                                    </div>
                                </Person>
                            </div>
                        </Person>
                </div>

    );
};

export default Persons;