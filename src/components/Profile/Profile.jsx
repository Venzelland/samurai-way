import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./Myposts/Myposts";

const Profile = () => {
    return <div className={s.content}>
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt=""/>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
}

export default Profile