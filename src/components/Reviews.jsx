// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'movieApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      const result = await getMovieReviews(movieId);
      console.log(result);
      setReviews([...result]);
    };

    getReviews();
  }, [movieId]);

  return reviews.length !== 0 ? (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <b>Author: {author}</b>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
};

export default Reviews;
