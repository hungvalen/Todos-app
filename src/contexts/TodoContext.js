import React,{createContext,useReducer,useEffect} from 'react'
import { todoReducer } from '../reducers/TodoReducers';
import { GET_TODOS, SAVE_TODOS } from '../reducers/type';
export const TodoContext = createContext();
const TodoContextProvider = ({children}) => {
    // State
    // const [todos,setTodos] = useState([
    //     {
    //         id:1,title:'Viec 1',
    //         id:2,title:'Viec 2',
    //         id:3,title:'Viec 3',
    //     }
    // ])
    const [todos,dispatch] = useReducer(todoReducer,[])
    // useEffect
    useEffect(()=>{
        dispatch({
            type:GET_TODOS,
            payload:null,

        })
        // là hành động 
    },[])
    useEffect(()=>{
       dispatch({
           type:SAVE_TODOS,
           payload:{todos}
       })

    },[todos])
    // const addTodo = todo=>{
    //     setTodos([...todos,todo])
    // }
    // const deleteTodo = id =>{
    //     setTodos(todos.filter(todo => todo.id !== id));
    // }
    const todoContextData ={
        todos,
        dispatch
    }
    return (
        <TodoContext.Provider value={todoContextData}>
            {children}
        </TodoContext.Provider>    
    )
}

export default TodoContextProvider
