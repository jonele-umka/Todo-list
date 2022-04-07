import React from 'react';

export const List = ({todos,setTodos}) => {

    const completeTodo = (index) => {
        let innitialTodos= [...todos]
        if(innitialTodos[index].completed === false){
            innitialTodos[index].completed = true

        } else {
            innitialTodos[index].completed = false 

        }
        setTodos(innitialTodos)
    }
    const deleteTodo = (index) => {
        let innitialTodos = [ ...todos]
        innitialTodos.splice(index, 1)
        setTodos(innitialTodos)
       
    }
  return <ul className='list'>
      {
          todos.map(({title,completed}, i)=> {
              return(
                  <li key={i} >
                   <span onClick={()=> completeTodo(i)} style={completed === false ? {textDecoration:'none'} : {textDecoration:'line-through'}}>{title} </span>
                      <button onClick ={()=> deleteTodo(i)}>Удалить</button>
                  </li> // key обьязательно должен быть при map
              )
          })
      }
  </ul>;
};
