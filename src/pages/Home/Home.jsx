import { MovieList } from 'components/MovieList';
import { getMovieTrend } from 'movieApi';
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const result = await getMovieTrend();
        setMovies([...result]);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </main>
  );
};

export default Home;
