import axios from 'axios';

export const FETCH_POSTS ='fetch_posts';
export const FETCH_POSTS_SUCCESS ='fetch_posts_success';


const ROOT_URL='http://rallycoding.herokuapp.com/api/music_albums';


export function fetchPosts() {  
    console.log('FETCH_POSTS ACTION');
    const url = `${ROOT_URL}`;
    const request = axios({
        method:'get',
        url
    })
    return request;
}
