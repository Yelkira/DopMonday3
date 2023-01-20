import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Components/Button";
import {Input} from "./Components/Input";


type TodosType = {
    completed: boolean
    id:number
    title:string
    userId: number
}

function App() {
    const [todos, setTodos] = useState<TodosType[]>([])
    const [newTitle, setNewTitle] = useState<string>("")

    const myFetch = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        myFetch()
    }, [])

    const ShowUpHandler = () => {
        myFetch()
    }

    const DeleteHandler = () => {
        setTodos([])
    }
    let mappedTodos = todos.map((t) => {
        return (
            <li key={t.id}>
                <span>{t.id}</span>
                <span>{t.title}</span>
                <input type="checkbox" checked={t.completed}/>
            </li>
        )
    })
    const addNewTitleHandler = () => {
        const newTodo = {completed: true, id: todos.length + 1, title: newTitle, userId: 1200}
        setTodos([newTodo, ...todos])
        setNewTitle("")
    }


    return (
        <div className="App">

            <Button callback={ShowUpHandler} title={"ShowUp"}/>
            <Button callback={DeleteHandler} title={"Delete"}/>
            <Input setNewTitle={setNewTitle} newTitle={newTitle}/>
            <Button callback={addNewTitleHandler} title={"Add new title"}/>
            <ul>
                {mappedTodos}
            </ul>
        </div>
    );

}
export default App;
