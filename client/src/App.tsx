import puzzleImage from './assets/images/puzzle.webp';

const App = () => {
  return (
    <div>
      <p>Hello world</p>
      <div className='image-container'>
        <img src={puzzleImage} alt='Puzzle' />
      </div>
    </div>
  );
};

export default App;
