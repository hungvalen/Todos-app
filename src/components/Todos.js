import React, { useContext,useEffect} from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import {AuthContext} from '../contexts/AuthContext'
import {TodoContext} from '../contexts/TodoContext'
import { GET_TODOS } from '../reducers/type'
const Todos = () => {
    
    // Load context
    const {todos} = useContext(TodoContext)
    // useEffect
    
    // load auth context
    const {isAuthenticated} = useContext(AuthContext);

    return (
        <div className="todo-list">
            <TodoForm />
            {
                isAuthenticated ? (<ul>
                    {
                        todos.map(todo => (
                            <TodoItem todo={todo} key={todo.id} />
        ))
                    }
                </ul>) : <p style={{textAlign:"center"}}>Not authorised</p>
            }
            
        </div>
    )
}

export default Todos
