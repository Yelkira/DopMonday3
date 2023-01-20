import React from 'react';

type PropsType={
    title:string
    callback:()=>void
}


export const Button = (props:PropsType) => {
    const onClickHandler = ()=>{
        props.callback()
    }
    return (
        <button onClick={onClickHandler}>{props.title}</button>
    );
};

