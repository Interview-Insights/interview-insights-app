import './QuestionList.css';
import styles from '../assets/styles/QuestionList.module.scss';

export default function QuestionList({ loading, questions, onRequestUpdate }) {
  return (
    <div className={styles.questionListContainer}>
      <h1 className={styles.questionsHeader}>Interview Questions</h1>
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        // <ul className={styles.questionList}>
        //   {questions.map((question, i) => {
        //     return (
        //       <li key={i} className={styles.questionItem}>
        //         <h3 className='question-title'>{question.title}</h3>
        //         <p className='question-text'>{question.question}</p>
        //       </li>
        //     );
        //   })}
        // </ul>
        <div className={styles.questionList}>
          {questions.map((question, i) => {
            return (
              <div key={i} className={styles.questionItem}>
                <h3 className='question-title'>{question.title}</h3>
                <p className='question-text'>{question.question}</p>
                <button>Add Answer</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
