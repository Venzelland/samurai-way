import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {

    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first comment?", likesCount: 23},
    ]

    let postsElements = posts.map(p => <Post message={p.message} like={p.likesCount}/> )



    return <div className={s.posts}>
        <div>
            <h3>My post</h3>
        </div>
        <div>
            <textarea name="" id="" cols="4" rows="1"></textarea>
        </div>
        <div>
            <button>add post</button>
        </div>
        <div>
            <button>remove</button>
        </div>
        <div>
            new post
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts