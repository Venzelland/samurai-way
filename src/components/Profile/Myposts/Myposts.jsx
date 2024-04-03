import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";
import {updateNewPostText} from "../../../redux/state";


const MyPosts = (props) => {


    let postsElements = props.posts.map(p => <Post message={p.message} like={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return <div className={s.posts}>
        <div>
            <h3>My post</h3>
        </div>
        <div>
            <textarea onChange={onPostChange} ref={newPostElement}
                      value={props.newPostText} name="" id="" cols="4" rows="1"></textarea>
        </div>
        <div>
            <button onClick={addPost}>add post</button>
        </div>
        {/*<div>*/}
        {/*    <button>remove</button>*/}
        {/*</div>*/}
        <div>
            new post
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts