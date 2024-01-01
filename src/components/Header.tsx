import React from "react";

type HeaderType = {
    title: string
}
export const Header = (props:HeaderType) => {
    return (
        <div>
            {props.title}
            <a href="#">Home</a> -
            <a href="#">New Feed</a> -
            <a href="#">Massages</a> -
        </div>
    )
}