import React, { Component } from 'react';
import '../../template/future-imperfect/assets/css/main.css';

class Intro extends Component {
    render() {
        return (
            <section id="intro">
    			<a href="#" className="logo"><img src={require("../../template/future-imperfect/images/logo.jpg")} alt="" /></a>
    			<header>
    				<h2>Future Imperfect</h2>
    				<p>Another fine responsive site template in HTML5</p>
    			</header>
    		</section>
        );
    }
}

module.exports = Intro;
