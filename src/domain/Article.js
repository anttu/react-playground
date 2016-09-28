class Article {
    constructor(article) {
        this.title = article.data.title;
        this.body = article.data.selftext;
        this.author = article.data.author;
        this.created = article.data.created_utc;
        this.imageurl = article.data.url;
        this.id = article.data.id;
    }
}

module.exports = Article;
