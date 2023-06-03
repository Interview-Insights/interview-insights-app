import './QuestionList.css';
import { useState } from 'react';
import styles from '../assets/styles/QuestionList.module.scss';
import { Modal, Box, Typography } from '@mui/material';
import getClient from '../config/supabaseClient.js';


export default function QuestionList({ loading, questions, onRequestUpdate }) {
  const supabase = getClient();
  const [open, setOpen] = useState(false);
  const [questionId, setQuestionId] = useState(null);
  const [postedAnswer, setPostedAnswer] = useState('');

  const handleOpen = (id) => {
    setOpen(true);
    setQuestionId(id);
  };

  const handleClose = () => setOpen(false);

  function handleCancel() {
    setPostedAnswer('');
    handleClose();
  }

  async function postAnswer() {
    try {
      const updates = {
        response: postedAnswer,
        post_id: questionId
      };

      let { error } = await supabase.from('comments').insert([updates]);
      if (error) throw error;
      alert('Answer Posted!');
      onRequestUpdate(); //fetch everything
    } catch (error) {
      alert('Error posting your question!');
      console.log(error);
    } finally {
    }
    console.log(postedAnswer)
    setPostedAnswer('');
    handleClose();
  }
  
  return (
    <div className={styles.questionListContainer}>
      <h1 className={styles.questionsHeader}>Interview Questions</h1>
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className={styles.questionList}>
          {questions.map((question) => {
            // console.log(question.question_id);
            return (
              <div key={question.question_id} className={styles.questionItem}>
                {/* <h3 className='question-title'>{question.title}</h3> */}
                <p className={styles.questionText}>{question.question}</p>
                <button className={styles.answerButton} onClick={() => handleOpen(question.question_id)}>Answer</button>
                
                {/* Map through answers list and render all the answers */}
                {/* {answers.map((answer) => {
                  return(
                    <p>{answer.}
                  )
                })} */}
              </div>
            );
          })}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className={styles.modalDivStyle}>
              <textarea className={styles.modalTextAreaStyle}
              value={postedAnswer || ''}
              onChange={(e) => setPostedAnswer(e.target.value)}
              ></textarea>
              <p>{questionId}</p>
                <button className={styles.modalButtonStyle}
                onClick={postAnswer}>Submit Answer</button>
                <button className={styles.modalButtonStyle}
                onClick={handleCancel}
                >Cancel</button>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
}
