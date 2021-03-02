import React,{useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext'

const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext);
    return (
        <div className='toggle-btn' onClick={toggleTheme}>
            <button id="btn">Toggle Theme</button>
        </div>
    )
}

export default ThemeToggle
