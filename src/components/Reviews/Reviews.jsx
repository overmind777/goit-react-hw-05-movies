import useHttp from 'hooks/useHttp';
import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'servises/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews] = useHttp(fetchReviewsById, movieId);

  if (!reviews) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {reviews.length !== 0 && (
        <div>
          <h2>Movie Reviews</h2>
          <ul>
            {reviews?.map(review => (
              <li key={review.id}>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie.</div>
      )}
    </div>
  );
};

export default Reviews;
