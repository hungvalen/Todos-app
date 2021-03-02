import React, {useState,createContext} from 'react'
export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) =>{
    // State
    const [theme,setTheme] = useState({
        isLightTheme:true,
        light:{
            background: 'rgb(240,240,240)',
            color:'black'
        },
        dark:{
            background: 'rgb(39,39,39)',
            color:'white'
        }
    })
    // function to toggle theme
    const toggleTheme = () =>{
        setTheme({
            ...theme,
            isLightTheme:!theme.isLightTheme
        })
    }
    // Context data 
    const themeContextData = {
        // theme:theme;
        theme,
        toggleTheme
        // viết như này cho gọn theme này chính là state
    }
    // return provider
    return (
        // trả lại cái kho
        <ThemeContext.Provider value={themeContextData}>
                {children}

        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider