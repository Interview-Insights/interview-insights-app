import './QuestionList.css';
import { useState } from 'react';
import styles from '../assets/styles/QuestionList.module.scss';
import AddAnswerModal from './AddAnswerModal';
import { Modal, Box, Typography } from '@mui/material';

export default function QuestionList({ loading, questions, onRequestUpdate }) {
  const [open, setOpen] = useState(false);
  const [questionId, setQuestionId] = useState(null);
  const handleOpen = () => {
    setOpen(true);
    setQuestionId(questionId);
  };

  const handleClose = () => setOpen(false);
  
  return (
    <div className={styles.questionListContainer}>
      <h1 className={styles.questionsHeader}>Interview Questions</h1>
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className={styles.questionList}>
          {questions.map((question) => {
            console.log(question.question_id);
            return (
              <div key={question.question_id} className={styles.questionItem}>
                <h3 className='question-title'>{question.title}</h3>
                <p className='question-text'>{question.question}</p>
                <button onClick={handleOpen}>Add Answer</button>
                
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
                  <textarea className={styles.modalTextAreaStyle}></textarea>
                  <p>{questions.question_id}</p>
                    <button className={styles.modalButtonStyle}>Submit Answer</button>
                </div>
                </Modal>
        </div>
      )}
    </div>
  );
}
