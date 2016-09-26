import React, { Component } from 'react';
import '../../template/future-imperfect/assets/css/main.css';

class Footer extends Component {
    render() {
        return (

                							<section id="footer">
                								<ul className="icons">
                									<li><a href="#" className="fa-twitter"><span className="label">Twitter</span></a></li>
                									<li><a href="#" className="fa-facebook"><span className="label">Facebook</span></a></li>
                									<li><a href="#" className="fa-instagram"><span className="label">Instagram</span></a></li>
                									<li><a href="#" className="fa-rss"><span className="label">RSS</span></a></li>
                									<li><a href="#" className="fa-envelope"><span className="label">Email</span></a></li>
                								</ul>
                								<p className="copyright">&copy; Untitled. Crafted: <a href="http://designscrazed.org/">HTML5</a>.</p>
                							</section>
        );
    }
}

module.exports = Footer;
