import React, { Component, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction'

class Posts extends Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    //componentDidUpdate()
    componentWillReceiveProps(nextProps){
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
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

//connect connecting state to store
export default connect(mapStateToProps, { fetchPosts })(Posts);