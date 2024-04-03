import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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

let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
let messagesElements = messageData.map(m => <Message message={m.message}/>)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    );
};

export default Dialogs;