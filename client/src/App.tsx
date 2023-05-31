import Landing from './components/Landing';
import Home from './components/Home';
import supabase from './config/supabaseClient.js';
import { Auth } from '@supabase/auth-ui-react';
import AuthBasic from './components/Auth';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AppProvider, useAppContext } from './context/appContext';
// import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react';
// import { useSupabaseClient } from '@supabase/auth-helpers-react';

const App = () => {
  // const [supabase] = useState(() => createBrowserSupabaseClient())
  // const supabase = useSupabaseClient();
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <AppProvider value={session}>
      <div>
        <p>Interview Insights</p>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route
            path='/login'
            element={
              // <Auth
              //   supabaseClient={supabase}
              //   appearance={{ theme: ThemeSupa }}
              //   theme='dark'
              //   redirectTo={`/home`}
              // />
              <AuthBasic />
            }
          />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </AppProvider>
  );
};

export default App;
