import React,{useState,useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext'
import { v4 as uuidv4 } from 'uuid';
import {TodoContext} from '../contexts/TodoContext'
import { ADD_TODO } from '../reducers/type';

const TodoForm = () => {
    // Load context
    const {theme} = useContext(ThemeContext);
    const {isLightTheme,light,dark} = theme;
    // Style

    // Load context todos
    const {dispatch} = useContext(TodoContext);
    
    // For this component only
    const [title,setTitle]=useState('');

    const onTitleChange = event=>{
        setTitle(event.target.value);
    }

    const handleSubmit = event =>{
        event.preventDefault();
        dispatch({
            type:ADD_TODO,
            payload:{
                todo:{
                    id:uuidv4(),
                    title
                }
            }
        })
        setTitle('');
        // đưa title về trạng thái ban đầu
        // tránh form submit về html sẽ request trang của chúng ta
    }
    // gọi lên mỗi khi user ấn vào submit

    

    const style = isLightTheme ? light :dark;

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
             name="title" 
             placeholder="Enter a new todo"
             onChange={onTitleChange}
             value={title}
             required/>
            <input type="submit" value="Add" style={style}/>

        </form>

    )
}

export default TodoForm
