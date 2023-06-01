import puzzleImage from '../assets/images/puzzle.webp';
import styles from '../assets/styles/Landing.module.scss';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className='display:flex flex-direction:column'>
        <p className={styles.title}>Interview Insights</p>
        <div className={styles.intro}>
          <p className={styles.text}>
            Welcome to Interview Insights, the ultimate platform for software
            engineers to share interview questions and collaborate. Join our
            community to post and discuss the questions you've faced, provide
            answers to other developers questions, and upvote the most helpful
            content. Together, let's conquer interview challenges and level up
            our technical skills.
          </p>
          <div className={styles.introbuttons}>
            <a href='/login'>
              <button className={styles.button}>Log In</button>
            </a>
          </div>
        </div>
      </div>
      <div>
        <img className={styles.imageContainer} src={puzzleImage} alt='Puzzle' />
      </div>
    </div>
  );
};

export default Landing;
