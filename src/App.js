import React, {useContext} from "react";
import { ThemeContext } from "./ThemeContext";
import './App.css';

function App() {
  const {theme, toggleTheme}= useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
       <header className="app-header">
        <h1>React Theme Switcher</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme.
        </button>
       </header>
    </div>
  );
}

export default App;
