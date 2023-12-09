import React from "react";
import {Route, Routes} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Theme";
import  {useDarkMode} from "./useDarkMode";
import Toggle from "./Toggler";

const App = () =>{
    const [theme, themeToggler, mountedComponent] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    return (
        <ThemeProvider theme={themeMode}>
          <>
            <GlobalStyles />
            <div className="App">
              <div className='text-center'>
                <Toggle theme={theme} toggleTheme={themeToggler} />
              </div>
            </div>
          </>
        </ThemeProvider>
    )
}

export default App