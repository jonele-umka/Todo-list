import React, { useState } from 'react';


export const Form = ({todos,setTodos}) => {
    const[value, setValue] = useState('')

    const changeHandler = (event)=> {
        setValue(event.target.value)
    }
    const createTodo = (event)=>{
        event.preventDefault()
        setTodos([...todos,{ title:value, completed: false}]) //...todos - добавление без удаления и изменения - СпретОператор
        setValue('')
    }
   
  return(
       <form className='form'>
           <input type="text" placeholder='Введите дело...'onChange={changeHandler} value={value}/>
           <button onClick={createTodo}>Добавить</button>
       </form>
  )
};
