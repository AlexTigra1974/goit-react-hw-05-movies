import { getMovieCast } from 'movieApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastCard, CastList } from './Cast.styled';
import defaultProfile from '../Images/default_profile.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      const result = await getMovieCast(movieId);
      setCast([...result]);
    };
    getCast();
  }, [movieId]);
  return (
    <>
      <CastList>
        {cast &&
          cast.map(({ id, name, character, profile_path }) => (
            <CastCard key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300${profile_path}`
                    : defaultProfile
                }
                alt={name}
                width={160}
              />
              <h3>{name} </h3>
              <p>
                <b>Character: </b> {character}
              </p>
            </CastCard>
          ))}
      </CastList>
    </>
  );
};

export default Cast;
