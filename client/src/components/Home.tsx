import QuestionComponent from './PostQuestion';
import QuestionList from './QuestionList';
import { useState, useEffect, useContext } from 'react';
import getClient from '../config/supabaseClient.js';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useAppContext } from '../context/appContext';

// import {
//   useSession,
//   useUser,
//   useSupabaseClient,
//   SupabaseClient,
// } from '@supabase/auth-helpers-react';
// import { ThemeSupa } from '@supabase/auth-ui-shared';

// interface Question {
//   title: string;
//   body: string;
// }

const Home = ({ signOut, session }) => {
  const supabase = getClient();
  // const session = useAppContext();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAll = async () => {
    if (!session) return;
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from('posts')
        .select(`question`);
      // .eq('user_id', user.id);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        // console.log('Question Data: ', data);
        setQuestions(data);
      }
    } catch (error) {
      // alert('Error loading user questions!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className='container' style={{ padding: '50px 0 100px 0' }}>
      <button
        onClick={() => {
          console.log('SIGN OUT');
          signOut();
        }}
      >
        Sign out
      </button>
      {/* {!session ? (
        <Auth
          supabaseClient={supabase}
          theme='dark'
          appearance={{ theme: ThemeSupa }}
        />
      ) : ( */}
      <div>
        <QuestionComponent
          session={session}
          onRequestUpdate={() => {
            fetchAll();
          }}
        />
        <QuestionList
          onRequestUpdate={() => {
            fetchAll();
          }}
          questions={questions}
          loading={loading}
        />
      </div>
      {/* }) */}
    </div>
  );
};

export default Home;
