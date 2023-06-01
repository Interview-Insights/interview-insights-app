import Landing from './components/Landing';
import AuthBasic from './components/LogIn';
import LogIn from './components/LogIn';
import supabase from './config/supabaseClient.js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <p>Interview Insights</p>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route
          path='/signup'
          element={
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme='dark'
            />
          }
        />
        <Route path='/login' element={<AuthBasic />} />
        {/* <Route path='/home' element={<Home />} /> */}
      </Routes>
    </div>
  );
};

export default App;
