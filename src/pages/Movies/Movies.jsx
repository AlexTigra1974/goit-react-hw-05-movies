import { Suspense, useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { SearchBox } from 'components/SearchBox';
import { MovieList } from 'components/MovieList';
import { getMovieSearch } from 'movieApi';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movieName === '') return;

    const getSearch = async () => {
      const respons = await getMovieSearch(movieName);
      if (respons.length === 0) toast.error('Oops...No such found');

      setMovies([...respons]);
    };

    getSearch();
  }, [movieName]);

  const handleSubmit = evt => {
    evt.preventDefault();

    const value = evt.target.search.value;
    if (value.trim() !== '') {
      toast.error(`Oops...you haven't entered anything`);
    }
    setSearchParams({ query: value });

    evt.currentTarget.reset();
  };

  return (
    <main>
      <SearchBox onSubmit={handleSubmit} />
      <MovieList movies={movies} />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Movies;
