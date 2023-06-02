import { useState, useEffect } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';

export default function PostQuestion({ onRequestUpdate }) {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  async function postQuestion({ title, body }) {
    try {
      setLoading(true);

      const updates = {
        title,
        body,
        user_id: user.id,
        updated_at: new Date().toISOString(),
      };

      // let { error } = await supabase.from('questions').upsert(updates);

    const { data, error } = await supabase
    .from('posts')
    .insert([
      { question: 'someValue', industry: 'computers', user_id: user.id },
    ]);

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
    <div className='post-questions'>
      <h1>Post A Question</h1>
      <div>
        <label htmlFor='title'>Title</label>
        <input
          id='title'
          type='text'
          value={title || ''}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='body'>Body</label>
        <input
          id='body'
          type='text'
          value={body || ''}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button
        className='button primary block'
        onClick={() => postQuestion({ title, body })}
        disabled={loading || !title || !body}
      >
        {loading ? 'Loading ...' : 'Create'}
      </button>
    </div>
  );
}
