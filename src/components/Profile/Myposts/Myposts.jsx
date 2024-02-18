import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
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
            <Post message={'Hi, how are you?'} like={15}/>
            <Post message={"It's my first comment"} like={333}/>
        </div>
    </div>
}

export default MyPosts