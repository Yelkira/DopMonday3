import React, {ChangeEvent} from 'react';
type InputPropsType = {
    setNewTitle: (newTitle:string)=>void
    newTitle:string
}
export const Input = (props:InputPropsType) => {
    const InputHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        props.setNewTitle(e.currentTarget.value)
    }
    return (
        <div>
            <input value={props.newTitle} onChange={InputHandler}/>
        </div>
    );
};

