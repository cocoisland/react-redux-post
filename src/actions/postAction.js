import { FETCH_POSTS, NEW_POST} from './types';

// function within a function
// function fetchPost() { return dispatch => { dispatch(something()) }}
export const fetchPosts = () => dispatch => {
    //fetch('https://jsonplaceholder.typicode.com/posts')
    fetch('http://localhost:5000/api/wisdom')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))       
}

export const createPost = (postData) => dispatch => {
    
    //fetch('https://jsonplaceholder.typicode.com/posts', {
    fetch('http://localhost:5000/api/wisdom', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)       
    })
    .then(res => res.json())
    .then(post => {
        //console.log('action post :', post)
        dispatch({
        type: NEW_POST,
        payload: post
        })
    })
    .catch(err => console.log('createPost of PostAction error :', err));  
}