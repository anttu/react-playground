import React, { Component } from 'react';
import './template/future-imperfect/assets/css/main.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import Sidebar from './components/sidebar/Sidebar';

class Template extends Component {
    render() {
        return (
            <div id="wrapper">

                <Header />

                <Menu />

                <Main />

                <Sidebar />

            </div>
        );
    }
}

export default Template;
