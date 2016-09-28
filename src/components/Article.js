import React, { Component } from 'react';
import '../template/future-imperfect/assets/css/main.css';

class Article extends Component {

    static propTypes = {
        title: React.PropTypes.string,
        username: React.PropTypes.string,
        created: React.PropTypes.number,
        body: React.PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.disableComponent = this.disableComponent.bind(this);
    }

    componentWillMount() {
        this.setState({ display: true });
    }

    disableComponent() {
        this.setState({ display: false });
    }

    render() {

        if (!this.state.display) return null;

        return (
            <article className="post">
                <header>
                    <div className="title">
                        <h2><a href="#">Magna sed adipiscing</a></h2>
                        <p>{this.props.title}</p>
                    </div>
                    <div className="meta">
                        <time className="published" dateTime="2015-11-01">November 1, 2015</time>
                        <a href="#" className="author"><span className="name">{this.props.username}</span><img src={ require ("../template/future-imperfect/images/avatar.jpg")} alt="" /></a>
                    </div>
                </header>

                <a href="#" className="image featured">
                    <img
                        src={this.props.imageurl}
                        onError={this.disableComponent}
                        alt=""
                    />
                </a>
                <p>
                    {this.props.body||this.props.title}
                </p>

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
        );
    }
}

module.exports = Article;
