import Landing from './components/Landing';
import Home from './components/Home';
import supabase from './config/supabaseClient.js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Routes, Route } from 'react-router-dom';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

const App = () => {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <div>
      <p>Interview Insights</p>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route
          path='/login'
          element={
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme='dark'
            />
          }
        />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
    </SessionContextProvider>
  )
};

export default App;
