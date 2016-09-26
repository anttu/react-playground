import React, { Component } from 'react';
import '../../template/future-imperfect/assets/css/main.css';

class MiniPosts extends Component {
    render() {
        return (
            <section>
                <div className="mini-posts">

                        <article className="mini-post">
                            <header>
                                <h3><a href="#">Vitae sed condimentum</a></h3>
                                <time className="published" dateTime="2015-10-20">October 20, 2015</time>
                                <a href="#" className="author"><img src={ require ("../../template/future-imperfect/images/avatar.jpg")} alt="" /></a>
                            </header>
                            <a href="#" className="image"><img src={ require ("../../template/future-imperfect/images/pic04.jpg")} alt="" /></a>
                        </article>

                        <article className="mini-post">
                            <header>
                                <h3><a href="#">Rutrum neque accumsan</a></h3>
                                <time className="published" dateTime="2015-10-19">October 19, 2015</time>
                                <a href="#" className="author"><img src={ require ("../../template/future-imperfect/images/avatar.jpg")} alt="" /></a>
                            </header>
                            <a href="#" className="image"><img src={ require ("../../template/future-imperfect/images/pic05.jpg")} alt="" /></a>
                        </article>

                        <article className="mini-post">
                            <header>
                                <h3><a href="#">Odio congue mattis</a></h3>
                                <time className="published" dateTime="2015-10-18">October 18, 2015</time>
                                <a href="#" className="author"><img src={ require ("../../template/future-imperfect/images/avatar.jpg")} alt="" /></a>
                            </header>
                            <a href="#" className="image"><img src={ require ("../../template/future-imperfect/images/pic06.jpg")} alt="" /></a>
                        </article>

                        <article className="mini-post">
                            <header>
                                <h3><a href="#">Enim nisl veroeros</a></h3>
                                <time className="published" dateTime="2015-10-17">October 17, 2015</time>
                                <a href="#" className="author"><img src={ require ("../../template/future-imperfect/images/avatar.jpg")} alt="" /></a>
                            </header>
                            <a href="#" className="image"><img src={ require ("../../template/future-imperfect/images/pic07.jpg")} alt="" /></a>
                        </article>
                </div>
            </section>

        );
    }
}

module.exports = MiniPosts;
