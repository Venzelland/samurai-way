import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


let newPostElement = React.createRef();

let addPost = () =>{
    let text= newPostElement.current.value
    alert(text)
}



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messageData.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newPostElement} name="" id="" cols="4" rows="1"></textarea>
            </div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
        </div>

    );
};

export default Dialogs;