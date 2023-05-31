import PostQuestion from './PostQuestion';
import QuestionList from './QuestionList';
import { useState, useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import {
  useSession,
  useUser,
  useSupabaseClient,
} from '@supabase/auth-helpers-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

// interface Question {
//   title: string;
//   body: string;
// }

const Home = () => {
  //   const session = useSession();
  const supabase = useSupabaseClient();
  //   const user = useUser();

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  /** 
  const fetchAll = async () => {
    if (!session) return;
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from('questions')
        .select(`id, title, body, upvotes`)
        .eq('user_id', user.id);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        console.log(data);
        setQuestions(data);
      }
    } catch (error) {
      alert('Error loading user questions!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, [session]);
*/
  return (
    <Auth
      supabaseClient={supabase}
      theme='dark'
      appearance={{ theme: ThemeSupa }}
    />
  );
  return (
    <div className='container' style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <Auth
          supabaseClient={supabase}
          theme='dark'
          appearance={{ theme: ThemeSupa }}
        />
      ) : (
        <div>
          <PostQuestion
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
      )}
    </div>
  );
};

export default Home;
