import { useState } from 'react';
import puzzleImage from './assets/images/puzzle.webp';
import { ThemeProvider, LoginProvider } from './context/appContext';

const App = () => {

  const [theme, setTheme] = useState("dark");
  const [username, setUsername] = useState("anonymous")

  return (
    <ThemeProvider value={{theme, setTheme}}>
      <LoginProvider value={{username, setUsername}}>
        <div>
          <p>Hello world</p>
          <div className='image-container'>
            <img src={puzzleImage} alt='Puzzle' />
          </div>
        </div>
      </LoginProvider>
    </ThemeProvider>
    
  );
};

export default App;
