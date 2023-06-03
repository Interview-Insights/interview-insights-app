import '../assets/styles/QuestionList.module.scss';

export default function QuestionList({ loading, questions, onRequestUpdate }) {
  return (
    <div className='questions'>
      <h1 className='questions-header'>Interview Questions</h1>
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <ul className='question-list'>
          {questions.map((question, i) => {
            return (
              <li key={i} className='question-item'>
                <h3 className='question-title'>{question.title}</h3>
                <p className='question-text'>{question.question}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
