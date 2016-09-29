import React, { Component } from 'react';
import '../template/future-imperfect/assets/css/main.css';
import { Link } from 'react-router'

class Header extends Component {
    render() {
        return (
            <header id="header">
                <h1><a href="/">Shreddit</a></h1>
                <nav className="links">
                    <ul>

                        <li><Link to='/rocketleague'>Rocket League</Link></li>
                        <li><Link to='/pics'>Pics</Link></li>
                        <li><Link to='/aww'>Aww</Link></li>
                        <li><Link to='/gaming'>Gaming</Link></li>
                        <li><Link to='/images'>Images</Link></li>
                        <li><Link to='/memes'>Memes</Link></li>
                    </ul>
                </nav>
                <nav className="main">
                    <ul>
                        <li className="search">
                            <a className="fa-search" href="#search">Search</a>
                            <form id="search" method="get" action="#">
                                <input type="text" name="query" placeholder="Search" />
                            </form>
                        </li>
                        <li className="menu">
                            <a className="fa-bars" href="#menu">Menu</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

module.exports = Header;
