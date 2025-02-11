import { useState } from 'react';
import { CelebrityList } from './data.tsx';
import './Gallery.css'

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < CelebrityList.length - 1;
  const hasBack = index > 0;

  function handleNextClick() {
    setIndex(hasNext ? index + 1 : 0);
  }

  function handleBackClick() {
    setIndex(hasBack ? index - 1 : CelebrityList.length - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let Celebrity = CelebrityList[index];

  return (
    <div className="container">
      <h1>Jerome Howard S. Miclat</h1>
      <button onClick={handleBackClick}>Back</button>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{Celebrity.name} </i> ({Celebrity.career})
      </h2>
      <h3>({index + 1} of {CelebrityList.length})</h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{Celebrity.description}</p>}
      <img src={Celebrity.url} alt={Celebrity.alt} />
    </div>
  );
}
