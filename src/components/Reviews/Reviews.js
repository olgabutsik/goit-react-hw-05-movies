import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { api } from 'pages/Home/Home';
import {
  StyledReviewList,
  StyledReviewItem,
  StyledSpan,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async function fetchReviews() {
      try {
        const res = await api.getMovieReviews(movieId);
        setReviews(res);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [movieId]);

  return (
    <>
      {!!reviews.length ? (
        <StyledReviewList>
          {reviews.map(({ id, username, rating, content }) => (
            <StyledReviewItem key={id}>
              <p style={{ display: 'flex', gap: '15px' }}>
                <StyledSpan>Author:</StyledSpan>
                <StyledSpan style={{ fontWeight: '600', fontSize: '20px' }}>
                  {username}
                </StyledSpan>
                <StyledSpan>{rating}</StyledSpan>
              </p>
              <p>{content}</p>
            </StyledReviewItem>
          ))}
        </StyledReviewList>
      ) : (
        <p>We didn't find any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
