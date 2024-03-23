import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {


    let postsElements = props.posts.map(p => <Post message={p.message} like={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () =>{
        let text= newPostElement.current.value
        props.addPost(text)
    }

    return <div className={s.posts}>
        <div>
            <h3>My post</h3>
        </div>
        <div>
            <textarea ref={newPostElement} name="" id="" cols="4" rows="1"></textarea>
        </div>
        <div>
            <button onClick={addPost}>add post</button>
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