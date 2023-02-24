import { useState, useEffect } from 'react';
import Service from 'service/service';
import StyledContainer from 'components/Container/Container.styled';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';

export const api = new Service();

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function fetchTrendingMovies() {
      try {
        setLoading(true);
        const res = await api.getTrendingMovies();
        const { results } = res;
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <section style={{ padding: '30px 0' }}>
        <StyledContainer>
          <h1
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
            }}
          >
            Trending today
          </h1>
          {!!movies.length && <MovieList movies={movies} />}
        </StyledContainer>
      </section>
      {loading && <Loader />}
    </>
  );
};
