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

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItems name={'Pol'} id={"1"}/>
                <DialogItems name={'John'} id={"2"}/>
                <DialogItems name={'Katy'} id={"3"}/>
                <DialogItems name={'Sveta'} id={"4"}/>
                <DialogItems name={'Victor'} id={"5"}/>
                <DialogItems name={'Kosty'} id={"6"}/>
            </div>
            <div className={s.massages}>
                <Massage massage={"Hi"}/>
                <Massage massage={"How are you?"}/>
                <Massage massage={"Yo"}/>
                <Massage massage={"Yo"}/>
                <Massage massage={"Yo"}/>
                <Massage massage={"Yo"}/>
            </div>
        </div>

    );
};

export default Dialogs;