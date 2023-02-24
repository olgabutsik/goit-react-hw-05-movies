import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  StyledCastList,
  StyledCastItem,
  StyledCastPicture,
  StyledCastText,
} from './Cast.styled';
import { api } from 'pages/Home/Home';
import { IMAGE_URL } from 'components/MovieCard/MovieCard';

const imageNotFound =
  'https://thumbs.dreamstime.com/b/page-not-found-error-illustration-35157161.jpg';

const isImageAvailable = image =>
  image ? `${IMAGE_URL}${image}` : imageNotFound;

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    (async function fetchMovieCast() {
      try {
        const res = await api.getMovieCredits(movieId);
        console.log(res);
        setCast(res);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [movieId]);

  return (
    cast.length && (
      <StyledCastList>
        {cast.map(({ name, character, profile_path }) => (
          <StyledCastItem key={name}>
            <StyledCastPicture src={isImageAvailable(profile_path)} />
            <StyledCastText>{name}</StyledCastText>
            <StyledCastText>Character: {character}</StyledCastText>
          </StyledCastItem>
        ))}
      </StyledCastList>
    )
  );
};

export default Cast;
