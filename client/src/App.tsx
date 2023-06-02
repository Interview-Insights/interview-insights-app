import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/Landing';
import getClient from './config/supabaseClient.js';
import { AppProvider } from './context/appContext';
import { SupabaseAuth } from './components/Auth';

const App = () => {
  const supabase = getClient();
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      // console.log("THIS IS A SESSION: ", session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session && window.location.pathname === '/login') {
        window.location.href = '/home';
      }
    });
  }, []);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (window.location.pathname === '/home') {
      window.location.href = '/login';
    }
  };

  // console.log(supabase.auth);

  return (
    <AppProvider value={session}>
      <div>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<SupabaseAuth />} />
          <Route path='/home' element={<Home signOut={signOut} session={session} />} />
        </Routes>
      </div>
    </AppProvider>
  );
};

export default App;
