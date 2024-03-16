import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    let path = '/dialogs/' + props.id;

    return <div className={s.dialog + " " + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Massage = (props) => {
    return <div className={s.massage}>{props.massage}</div>
}

let dialogsData = [
    {id: 1, name: "Pol"},
    {id: 2, name: "John"},
    {id: 3, name: "Katy"},
    {id: 4, name: "Sveta"},
    {id: 5, name: "Victor"},
    {id: 6, name: "Kosty"},
]

let messageData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Hi"},
    {id: 4, message: "Hi"},
    {id: 5, message: "Hi"},
    {id: 6, message: "Hi"},
]

let dialogsElements = dialogsData.map(d => <DialogItems name={d.name} id={d.id}/>)
let messagesElements = messageData.map(m => <Massage massage={m.message}/>)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.massages}>
                {messagesElements}
            </div>
        </div>

    );
};

export default Dialogs;