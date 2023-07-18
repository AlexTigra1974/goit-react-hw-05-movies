// import { getMovieById } from 'movieApi';
import { useRef, useEffect, useState, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

import { getMovieDetails } from 'movieApi';
import { GoBackLink, DetailsWrap, AdditionalWrap } from './MovieDetails.styled';
import { List } from 'components/Layout.styled';
import defaultPoster from '../../Images/No_Poster-1.jpeg';

const MovieDetails = () => {
  const [movieById, setMovieById] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getMoviesById = async () => {
      const result = await getMovieDetails(movieId);

      setMovieById(result);
    };

    getMoviesById();
  }, [movieId]);

  const {
    original_title,
    release_date,
    vote_average,
    poster_path,
    overview,
    genres,
  } = movieById;

  const score = Math.round(vote_average) * 10;
  const releaseDate = release_date?.slice(0, 4);

  return (
    <div>
      <GoBackLink to={backLinkLocationRef.current}>
        <HiArrowLeft size="14" />
        Go back
      </GoBackLink>
      <DetailsWrap>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : defaultPoster
          }
          alt={original_title}
          width={320}
        />
        <div>
          <h1>
            {original_title} ({releaseDate})
          </h1>
          <p>User score: {score}%</p>
          <b>Overview</b>
          <p>{overview}</p>
          <b>Genres</b>
          <List>
            {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </List>
        </div>
      </DetailsWrap>
      <AdditionalWrap>
        <p>Additional information</p>
        <List>
          <li>
            <Link to="Cast">Cast</Link>
          </li>
          <li>
            <Link to="Reviews">Reviews</Link>
          </li>
        </List>
      </AdditionalWrap>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
