import React, { useState } from 'react'
import './App.css'
import { Form } from './Components/Form'
import { List } from './Components/List'

export const App = () => {
    const[todos, setTodos] = useState([])
    console.log(todos)
    return (
        <div className="app">
            <Form todos={todos} setTodos= {setTodos}/>
            <List todos={todos} setTodos= {setTodos}/>
        </div>
    )
}
