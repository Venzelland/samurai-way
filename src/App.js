import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


<<<<<<< HEAD:src/App.js
const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route
                    path={"/dialogs"}
                    render={() => <Dialogs
                        state={props.state.dialogsPage}/>}/>

                <Route path={"/profile"}
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText}
                       />} />
                <Route
                    path={"/news"}
                    render={() => <News/>}/>
                <Route
                    path={"/music"}
                    render={() => <Music/>}/>
                <Route
                    path={"/settings"}
                    render={() => <Settings/>}/>
=======
const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={"/dialogs"} render={() => <Dialogs/>}/>
                    <Route path={"/profile"} render={() => <Profile/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                </div>
>>>>>>> parent of 05ac2f8 (lesson 32 done):src/App.tsx
            </div>
        </BrowserRouter>
    );
}
export default App;
