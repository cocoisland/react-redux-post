import React, {useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postAction';
/*
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
*/

const PostForm = (props)  => {
    const [formState, setFormState] = useState({
        title: '',
        body: ''
    })

    function onChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    function onSubmit(e) {
        e.preventDefault();

        const postData = {
            title: formState.title,
            body: formState.body
        }

        // call action
        props.createPost(postData);

        console.log(' postform ', postData)
        // update DOM posts body as defined in Posts.js
        props.posts.unshift(postData);
    }      

    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={onSubmit} >
                <div>
                    <label>Title: </label><br />
                    <input type='text' name='title' 
                    onChange={onChange} value=
                    {formState.title} />
                </div>
                <div>
                    <label>Body: </label><br />
                    <textarea name='body'  
                    onChange={onChange} value=
                    {formState.body}/>
                </div>
                <br />
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
    
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

//export default connect(null, { createPost })(PostForm);
export default connect(mapStateToProps, { createPost })(PostForm);