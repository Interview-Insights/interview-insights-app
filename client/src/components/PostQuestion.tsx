import { useState, useEffect } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import getClient from '../config/supabaseClient.js';

export default function QuestionComponent({ session, onRequestUpdate }) {
  const supabase = getClient();

  const [loading, setLoading] = useState(false);
  const [postedQuestion, setPostedQuestion] = useState('');

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

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    marginLeft: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    marginTop: '10px',
  };

  const inputStyle = {
    width: '80%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const labelStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginRight: '2rem',
  };

  return (
    <form className='post-questions' style={formStyle}>
      <h1>Post A Question</h1>

      <div>
        <label style={labelStyle} htmlFor='question'>
          Question
        </label>
        <input
          id='question'
          type='text'
          style={inputStyle}
          value={postedQuestion || ''}
          onChange={(e) => setPostedQuestion(e.target.value)}
          style={inputStyle}
        />
      </div>
      <button
        type='button'
        className='button primary block'
        onClick={() => {
          postQuestion();
        }}
        disabled={loading || !postedQuestion}
        style={buttonStyle}
      >
        {loading ? 'Loading ...' : 'Post Question'}
      </button>
    </form>
  );
}
