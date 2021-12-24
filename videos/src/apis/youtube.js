import axios from 'axios';

const KEY = 'AIzaSyCuoaHyohIGuTrImkhzNswEfNe0FKMWx8o';

export default axios.create({
baseURL:  'https://www.googleapis.com/youtube/v3',
params:{
    part:'snippet',
    maxResults:5,
    key: KEY,
    
}
});