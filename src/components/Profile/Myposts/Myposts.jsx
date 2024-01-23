import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        <div>
            my post
        </div>
        <textarea name="" id="" cols="4" rows="1"></textarea>
        <button>add post</button>
        <button>remove</button>
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