import './QuestionList.css';
import { useState } from 'react';
import styles from '../assets/styles/QuestionList.module.scss';
import AddAnswerModal from './AddAnswerModal';
import { Modal, Box, Typography } from '@mui/material';

export default function QuestionList({ loading, questions, onRequestUpdate }) {
  // render Modal onClick
  // const [modalOpen, setModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    color: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  // const handleOpen = () => {
  //   setModalOpen(!modalOpen);
  //   console.log('open', open);
  //   // if (open) {
  //   //   return (
  //   //     <AddAnswerModal props={setModalOpen} />
  //   //   );
  // };
  
  return (
    <div className={styles.questionListContainer}>
      <h1 className={styles.questionsHeader}>Interview Questions</h1>
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className={styles.questionList}>
          {questions.map((question, i) => {
            return (
              <div key={i} className={styles.questionItem}>
                <h3 className='question-title'>{question.title}</h3>
                <p className='question-text'>{question.question}</p>
                {/* <button onClick={handleOpen}>Add Answer</button> */}
                {/* open ? <AddAnswerModal props={setModalOpen} /> : null */}
                <button onClick={handleOpen}>Add Answer</button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                <div className={styles.modalDivStyle}>
                  <textarea className={styles.modalTextAreaStyle}></textarea>
                    <button className={styles.modalButtonStyle}>Submit Answer</button>
                </div>
                </Modal>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
