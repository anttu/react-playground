import axios from 'axios';
import Article from '../domain/Article';

class NewsService {

    /**
    Get latest content from reddit.com/r/pics
    We use Reddit's feeds due to their permissive CORS headers
    */
    getRedditNews(subreddit) {
        const slug = subreddit || 'pics';
        return axios.get(`https://www.reddit.com/r/${slug}/.json`).then(
            response => response.data.data.children.map(child => new Article(child))
        );
    }
}

const newsService = new NewsService();

module.exports = newsService;
