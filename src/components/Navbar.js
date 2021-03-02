import React, {useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext'
import {AuthContext} from '../contexts/AuthContext'
import { TOGGLE_AUTH } from '../reducers/type';

const Navbar = ()=>{
    // Load theme context
    const {theme} = useContext(ThemeContext);
    const {isLightTheme,light,dark} = theme;
    const style = isLightTheme ? light :dark;
    
    // Load Auth context
    const {isAuthenticated,dispatch} = useContext(AuthContext);
    return (
        <div className="navbar" style={style}>
            <h1>Todo App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>
                    {isAuthenticated ? "You are logged in" : ""}
                    <button id="but" onClick={()=>{
                        dispatch({
                            type:TOGGLE_AUTH
                        })
                    }}>
                        {isAuthenticated ?'Logout':'Login'}
                    </button>
                </li>
            </ul>
        </div>
    )
}
export default Navbar
// xuất khẩu để import