import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Persondetails from './components/persondetails/Persondetails';
import './style/global.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";


function App() {
    return(
        <Router>
            <div className="App">
                <Sidebar/>
                <div className="container">
                    <Header/>
                    <Switch>
                        <Route exact path="/">
                            <Main/>
                        </Route>
                        <Route path="/persondetails">
                            <Persondetails/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;

