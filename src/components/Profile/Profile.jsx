import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./Myposts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

<<<<<<< HEAD
const Profile = (props) => {

    return <div>
        <ProfileInfo/>
        <MyPosts
            posts={props.profilePage.posts}
            newPostText={props.profilePage.newPostText}
            updateNewPostText={props.updateNewPostText}
            addPost={props.addPost}/>
=======

const Profile = () => {
    return <div>
        <ProfileInfo/>
        <MyPosts/>
>>>>>>> parent of 05ac2f8 (lesson 32 done)
    </div>
}

export default Profile