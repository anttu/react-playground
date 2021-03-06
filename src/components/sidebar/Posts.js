import React, { Component } from 'react';
import '../../template/future-imperfect/assets/css/main.css';

class Posts extends Component {
    render() {
        return (
            <section>
                <ul className="posts">
                    <li>
                        <article>
                            <header>
                                <h3><a href="#">Lorem ipsum fermentum ut nisl vitae</a></h3>
                                <time className="published" dateTime="2015-10-20">October 20, 2015</time>
                            </header>
                            <a href="#" className="image"><img src={ require ("../../template/future-imperfect/images/pic08.jpg")} alt="" /></a>
                        </article>
                    </li>
                    <li>
                        <article>
                            <header>
                                <h3><a href="#">Convallis maximus nisl mattis nunc id lorem</a></h3>
                                <time className="published" dateTime="2015-10-15">October 15, 2015</time>
                            </header>
                            <a href="#" className="image"><img src={ require ("../../template/future-imperfect/images/pic09.jpg")} alt="" /></a>
                        </article>
                    </li>
                    <li>
                        <article>
                            <header>
                                <h3><a href="#">Euismod amet placerat vivamus porttitor</a></h3>
                                <time className="published" dateTime="2015-10-10">October 10, 2015</time>
                            </header>
                            <a href="#" className="image"><img src={ require ("../../template/future-imperfect/images/pic10.jpg")} alt="" /></a>
                        </article>
                    </li>
                    <li>
                        <article>
                            <header>
                                <h3><a href="#">Magna enim accumsan tortor cursus ultricies</a></h3>
                                <time className="published" dateTime="2015-10-08">October 8, 2015</time>
                            </header>
                            <a href="#" className="image"><img src={ require ("../../template/future-imperfect/images/pic11.jpg")} alt="" /></a>
                        </article>
                    </li>
                    <li>
                        <article>
                            <header>
                                <h3><a href="#">Congue ullam corper lorem ipsum dolor</a></h3>
                                <time className="published" dateTime="2015-10-06">October 7, 2015</time>
                            </header>
                            <a href="#" className="image"><img src={ require ("../../template/future-imperfect/images/pic12.jpg")} alt="" /></a>
                        </article>
                    </li>
                </ul>
            </section>
        );
    }
}

module.exports = Posts;
