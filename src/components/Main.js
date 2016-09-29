import React, { Component } from 'react';
import '../template/future-imperfect/assets/css/main.css';
import NewsService from '../services/NewsService';
import Article from './Article';

class Menu extends Component {

    componentWillMount() {
        this.setState({ articles: [] });
    }

    componentDidMount() {
        this.getNews(this.props.page);
    }

    componentWillReceiveProps(newProps) {
        this.getNews(newProps.page);
    }

    getNews(page) {
        NewsService.getRedditNews(page).then((response) => {
            this.setState({ articles: response });
        });
    }

    render() {
        return (
            <div id="main">

                {
                    this.state.articles.map(article =>
                        <Article
                            article={article}
                            key={article.id}
                        />
                    )
                }

                <ul className="actions pagination">
                    <li><a href="" className="disabled button big previous">Previous Page</a></li>
                    <li><a href="#" className="button big next">Next Page</a></li>
                </ul>
            </div>
        );
    }
}

module.exports = Menu;
