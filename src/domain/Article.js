class Article {
    constructor(article) {
        this.title = article.data.title;
        this.body = article.data.selftext;
        this.author = article.data.author;
        this.created = new Date(article.data.created_utc*1000);
        this.imageurl = article.data.url;
        this.id = article.data.id;
    }
}

module.exports = Article;
