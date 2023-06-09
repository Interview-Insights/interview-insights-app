import QuestionComponent from './PostQuestion';
import QuestionList from './QuestionList';
import { useState, useEffect } from 'react';
import getClient from '../config/supabaseClient.js';
// import styles from '../styles/home.module.css';
import styles from '../assets/styles/Home.module.scss';

const Home = ({ signOut, session }) => {
  const supabase = getClient();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAll = async () => {
    if (!session) return;
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from('posts')
        .select(`question, question_id`);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        console.log(data);
        setQuestions(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, [session]);

  return (
    // <div className='container' style={{ padding: '50px 0 100px 0' }}>
    <>
    <div className={styles.navBar}>
      <button className={styles.signOut}
          onClick={() => {
            console.log('SIGN OUT');
            signOut();
          }}
        >
          Sign out
        </button>
    </div>
    <div className={styles.homeContainer}>
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
    </>
  );
};

export default Home;
