import axios from 'axios';

class NewsService {

    /**
    Get latest content from reddit.com/r/pics
    We use Reddit's feeds due to their permissive CORS headers
    */
    getRedditNews() {
        return axios.get('https://www.reddit.com/r/pics/.json').then(response => response.data);
    }
}

const newsService = new NewsService();

module.exports = newsService;
