import { useState } from 'react';

import star from './icons/star_icon.svg'
import emptyStar from './icons//emptyStar_icon.svg'

import './App.css';

function App() {
  const [rating, setRating] = useState(1);
  const [hover, setHover] = useState(1);


  return (
    <>
      <div className='rating-container'>
        <div>
          <p className='estimate'>Ваша оценка</p>
          <div className='stars-container'>
            {[...Array(5)].map((__, index) => {
              index += 1;
              return (
                <button
                  type='button'
                  className={index <= (hover || rating) ? 'btn-star on' : 'btn-star off'}
                  key={Number(Math.random() * index + 1)}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                >
                  <img className='rating-start' src={star} alt={emptyStar} key={Math.random()} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className='results'>rating: {rating} hover: {hover}</div>
    </>
  );
}

export default App;
