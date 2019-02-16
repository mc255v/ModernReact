import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
   headers: {
                Authorization: 'Client-ID 1cb156f4848be446e83222cf31b310cba891bb44c6bfc82b12f14aeb2d7c94b8'
            } 
});