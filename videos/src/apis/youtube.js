import axios from 'axios';

const KEY = 'AIzaSyAqb3gcEygtIZRj0-ifl1uB3gGwBY4Fh1I';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});