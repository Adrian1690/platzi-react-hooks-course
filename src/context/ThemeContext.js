import React, { useState } from 'react'

const ThemeContext = React.createContext(null);

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState('red');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;
