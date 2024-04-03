import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";
import {updateNewPostText} from "../../../redux/state";


const MyPosts = () => {

    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first comment?", likesCount: 23},
    ]

    let postsElements = posts.map(p => <Post message={p.message} like={p.likesCount}/> )


<<<<<<< HEAD
    let postsElements = props.posts.map(p => <Post message={p.message} like={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }
=======
>>>>>>> parent of 05ac2f8 (lesson 32 done)

    return <div className={s.posts}>
        <div>
            <h3>My post</h3>
        </div>
        <div>
<<<<<<< HEAD
            <textarea onChange={onPostChange} ref={newPostElement}
                      value={props.newPostText} name="" id="" cols="4" rows="1"></textarea>
=======
            <textarea name="" id="" cols="4" rows="1"></textarea>
>>>>>>> parent of 05ac2f8 (lesson 32 done)
        </div>
        <div>
            <button>add post</button>
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