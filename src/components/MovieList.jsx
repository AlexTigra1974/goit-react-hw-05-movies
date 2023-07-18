import { Link, useLocation } from 'react-router-dom';
import { List } from './Layout.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <List>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {/* <img
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={title}
                width={240}
              /> */}
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </List>
    </>
  );
};

//  https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg

// return (
//   <Main>
//     <BackLink to={backLinkLocationRef.current}>
//       <MdOutlineArrowBack />
//       Go back
//     </BackLink>

//     <ThumbDetails>
//       <img
//         src={
//           poster_path
//             ? `https://image.tmdb.org/t/p/w300/${poster_path}`
//             : defaultPosterImage
//         }
//         alt={original_title}
//         width={320}
//       />
//       <ThumbInfo>
//         <h2>
//           <b>{original_title}</b> ({releaseDate.getFullYear()})
//         </h2>
//         <b>User score: {userScore}%</b>
//         <b>Overview</b>
//         <p>{overview} </p>
//         <b>Genres</b>
//         <ListGenres>
//           {genres &&
//             genres.map(({ id, name }) => (
//               <ItemGenres key={id}>{name}</ItemGenres>
//             ))}
//         </ListGenres>
//       </ThumbInfo>
//     </ThumbDetails>
//     <ThumbAdditional>
//       <Title>Additional information</Title>
//       <AdditionalList>
//         <AdditionalItem>
//           <BackLink to="cast">Cast</BackLink>
//         </AdditionalItem>
//         <AdditionalItem>
//           <BackLink to="reviews">Reviews</BackLink>
//         </AdditionalItem>
//       </AdditionalList>
//     </ThumbAdditional>
//     <Suspense fallback={<Loader />}>
//       <Outlet />
//     </Suspense>
//   </Main>
// );
