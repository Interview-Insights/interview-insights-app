import { useState, useEffect } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import getClient from '../config/supabaseClient.js';

export default function QuestionComponent({ session, onRequestUpdate }) {

  const supabase = getClient();
  // const user = useUser();
  const [loading, setLoading] = useState(false);
  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');
  const [postedQuestion, setPostedQuestion] = useState('');

  async function postQuestion() {
    // const { data, error } = await supabase
    // .from('posts')
    // .insert([
    //   { some_column: 'someValue', other_column: 'otherValue' },
    // ])

    try {
      setLoading(true);

      // const updates = {
      //   question: postedQuestion,
      //   // title,
      //   // body,
      //   user_id: session.user.id,
      //   // updated_at: new Date().toISOString(),
      // };

      const updates = {
        question: postedQuestion,
        user_id: session.user.id,
      };
      
      console.log({updates})

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
  // console.log("user", session.user.id)
  return (
    <form className='post-questions'>
      <h1>Post A Question</h1>
 
      <div>
        <label htmlFor='question'>Question</label>
        <input
          id='question'
          type='text'
          value={postedQuestion || ''}
          onChange={(e) => setPostedQuestion(e.target.value)}
        />
      </div>
      <button
        type='button'
        className='button primary block'
        onClick={() => {
          postQuestion();
        }
        }
        disabled={loading || !postedQuestion}
      >
        {loading ? 'Loading ...' : 'Post Question'}
      </button>
    </form>
  );
}
