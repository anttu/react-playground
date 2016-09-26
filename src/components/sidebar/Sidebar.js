import React, { Component } from 'react';
import '../../template/future-imperfect/assets/css/main.css';
import Intro from './Intro';
import MiniPosts from './MiniPosts';
import Posts from './Posts';
import About from './About';
import Footer from './Footer';

class Sidebar extends Component {
    render() {
        return (
            <section id="sidebar">
                <Intro />
                <MiniPosts />
                <Posts />
                <About />
                <Footer />
            </section>
        );
    }
}

module.exports = Sidebar;
