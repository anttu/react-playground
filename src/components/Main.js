import React, { Component } from 'react';
import '../template/future-imperfect/assets/css/main.css';

class Menu extends Component {
    render() {
        return (
            <div id="main">

                <article className="post">
                    <header>
                        <div className="title">
                            <h2><a href="#">Magna sed adipiscing</a></h2>
                            <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
                        </div>
                        <div className="meta">
                            <time className="published" dateTime="2015-11-01">November 1, 2015</time>
                            <a href="#" className="author"><span className="name">Jane Doe</span><img src={ require ("../template/future-imperfect/images/avatar.jpg")} alt="" /></a>
                        </div>
                    </header>

                    <a href="#" className="image featured"><img src={ require ("../template/future-imperfect/images/pic01.jpg")} alt="" /></a>
                    <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>

                    <footer>
                        <ul className="actions">
                            <li><a href="#" className="button big">Continue Reading</a></li>
                        </ul>
                        <ul className="stats">
                            <li><a href="#">General</a></li>
                            <li><a href="#" className="icon fa-heart">28</a></li>
                            <li><a href="#" className="icon fa-comment">128</a></li>
                        </ul>
                    </footer>
                </article>

                <article className="post">
                    <header>
                        <div className="title">
                            <h2><a href="#">Ultricies sed magna euismod enim vitae gravida</a></h2>
                            <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
                        </div>

                        <div className="meta">
                            <time className="published" dateTime="2015-10-25">October 25, 2015</time>
                            <a href="#" className="author"><span className="name">Jane Doe</span><img src={ require ("../template/future-imperfect/images/avatar.jpg")} alt="" /></a>
                        </div>
                    </header>

                    <a href="#" className="image featured"><img src={ require ("../template/future-imperfect/images/pic02.jpg")} alt="" /></a>
                    <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper.</p>

                    <footer>
                        <ul className="actions">
                            <li><a href="#" className="button big">Continue Reading</a></li>
                        </ul>
                        <ul className="stats">
                            <li><a href="#">General</a></li>
                            <li><a href="#" className="icon fa-heart">28</a></li>
                            <li><a href="#" className="icon fa-comment">128</a></li>
                        </ul>
                    </footer>
                </article>

                <article className="post">
                    <header>
                        <div className="title">
                            <h2><a href="#">Euismod et accumsan</a></h2>
                            <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
                        </div>
                        <div className="meta">
                            <time className="published" dateTime="2015-10-22">October 22, 2015</time>
                            <a href="#" className="author"><span className="name">Jane Doe</span><img src={ require ("../template/future-imperfect/images/avatar.jpg")} alt="" /></a>
                        </div>
                    </header>

                    <a href="#" className="image featured"><img src={ require ("../template/future-imperfect/images/pic03.jpg")} alt="" /></a>
                    <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Cras vehicula tellus eu ligula viverra, ac fringilla turpis suscipit. Quisque vestibulum rhoncus ligula.</p>

                    <footer>
                        <ul className="actions">
                            <li><a href="#" className="button big">Continue Reading</a></li>
                        </ul>
                        <ul className="stats">
                            <li><a href="#">General</a></li>
                            <li><a href="#" className="icon fa-heart">28</a></li>
                            <li><a href="#" className="icon fa-comment">128</a></li>
                        </ul>
                    </footer>
                </article>

                <ul className="actions pagination">
                    <li><a href="" className="disabled button big previous">Previous Page</a></li>
                    <li><a href="#" className="button big next">Next Page</a></li>
                </ul>
            </div>
        );
    }
}

module.exports = Menu;
