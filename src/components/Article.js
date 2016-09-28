import DateFormat from 'dateformat';
import React, { Component } from 'react';
import '../template/future-imperfect/assets/css/main.css';

class Article extends Component {

    static propTypes = {
        article: React.PropTypes.object,
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
                        <h2><a href="#">{this.props.article.author}</a></h2>
                        <p>{this.props.article.title}</p>
                    </div>
                    <div className="meta">
                        <time
                            className="published"
                            dateTime={`${DateFormat(this.props.article.created, 'yyyy-mm-dd')}`}>
                                {DateFormat(this.props.article.created, 'dd mmmm yyyy')}
                        </time>
                        <a href="#" className="author"><span className="name">{this.props.article.author}</span><img src={ require ("../template/future-imperfect/images/avatar.jpg")} alt="" /></a>
                    </div>
                </header>

                <a href="#" className="image featured">
                    <img
                        src={this.props.article.imageurl}
                        onError={this.disableComponent}
                        alt=""
                    />
                </a>
                <p>
                    {this.props.article.body||this.props.article.title}
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
