import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState('');
  const [genres, setGenres] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setGenres(json.data.movie.genres);
    console.log(movie, '!!!!!');
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.large_cover_image} alt={movie.title} />
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>👍:{movie.like_count}</p>
    </div>
  );
};

export default Detail;
