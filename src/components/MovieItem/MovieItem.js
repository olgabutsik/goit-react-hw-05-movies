import { Link, useLocation } from 'react-router-dom';

const MovieItem = ({ id, title, name }) => {
  const location = useLocation();

  return (
    <li>
      <Link
        to={`/movies/${id}`}
        state={{ from: location }}
        style={{ color: '#1a0000' }}
      >
        {title ? title : name}
      </Link>
    </li>
  );
};

export default MovieItem;
