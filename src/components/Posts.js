import React, {  useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction'

const Posts = (props) => { 
    
    const {fetchPosts} = props
    useEffect(() => {
        fetchPosts(); 
    },[fetchPosts]) 

    return( 
        <div>
            <h1>Posts</h1>
            { props.posts.map((post, index) => (
            <React.Fragment key={index}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </React.Fragment>
            ))}
        </div>   
    )
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

// posts from rootReducer posts
const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

/* const mapDispatchToProps = {
    fetchPosts
} */

//connect connecting state to store
export default connect(mapStateToProps, { fetchPosts })(Posts);
//export default connect(mapStateToProps, mapDispatchToProps)(Posts);