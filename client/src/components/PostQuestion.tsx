import { useState, useRef, useEffect } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import getClient from '../config/supabaseClient.js';
import styles from '../assets/styles/PostQuestion.module.scss';
// import useAutosizeTextArea from './useAutoSizeTextArea';

export default function QuestionComponent({ session, onRequestUpdate }) {
  const supabase = getClient();
  

  const [loading, setLoading] = useState(false);
  const [postedQuestion, setPostedQuestion] = useState('');
  // const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // useAutosizeTextArea(textAreaRef.current, postedQuestion);

  async function postQuestion() {
    try {
      setLoading(true);

      const updates = {
        question: postedQuestion,
        user_id: session.user.id,
      };

      console.log({ updates });

      let { error } = await supabase.from('posts').insert([updates]);
      if (error) throw error;
      alert('Question Posted!');
      onRequestUpdate(); //fetch everything
    } catch (error) {
      alert('Error posting your question!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
  //   <form className='post-questions' style={formStyle}>
  //     <h1>Post A Question</h1>

  //     <div>
  //       <label style={labelStyle} htmlFor='question'>
  //         Question
  //       </label>
  //       <input
  //         id='question'
  //         type='text'
  //         style={inputStyle}
  //         value={postedQuestion || ''}
  //         onChange={(e) => setPostedQuestion(e.target.value)}
  //         style={inputStyle}
  //       />
  //     </div>
  //     <button
  //       type='button'
  //       className='button primary block'
  //       onClick={() => {
  //         postQuestion();
  //       }}
  //       disabled={loading || !postedQuestion}
  //       style={buttonStyle}
  //     >
  //       {loading ? 'Loading ...' : 'Post Question'}
  //     </button>
  //   </form>
  // );
    <div className={styles.postQuestionContainer}>
      <form className={styles.questionForm}>
        <h1>Post A Question</h1>
          <label className={styles.questionLabel}
          htmlFor='question'>
            Question
          </label>
          <textarea className={styles.questionInput}
            id='question'
            // type='text'
            value={postedQuestion || ''}
            onChange={(e) => setPostedQuestion(e.target.value)}
          />
        <button
          type='button'
          className={styles.postQuestionButton}
          onClick={() => {
            postQuestion();
          }}
          disabled={loading || !postedQuestion}
        >
          {loading ? 'Loading ...' : 'Post Question'}
        </button>
      </form>
    </div>
  );
}
