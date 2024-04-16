import { useEffect, useState } from 'react';
import './MoviesCard.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { checkIsLiked } from '../../utils/utils';
import { BASE_IMAGE_URL } from '../../utils/constants';

export default function MoviesCard({
  card,
  onCardLike,
  onCardDislike,
  savedMovies = [],
}) {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (onCardLike) setIsLiked(checkIsLiked(savedMovies, card.id));
  }, [savedMovies]);

  function formatDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return (hours > 0 ? `${hours}ч ` : '') + (minutes > 0 ? `${minutes}м` : '');
  }

  const handleLikeClick = () => {
    if (!isLiked) {
      const movieData = {
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: `${BASE_IMAGE_URL}/${card.image.url}`,
        trailerLink: `${BASE_IMAGE_URL}/${card.trailerLink}`,
        thumbnail: `${BASE_IMAGE_URL}/${card.image.formats.thumbnail.url}`,
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
      };
      onCardLike(movieData);
    } else {
      onCardDislike(card.id);
    }
  };

  return (
    <article className="card">
      <Link
        to={card.trailerLink}
        className="card__link"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          className="card__image"
          src={onCardLike ? `${BASE_IMAGE_URL}/${card.image.url}` : card.image}
          alt={card.nameRU}
        />
      </Link>
      <div className="card__widget">
        <div className="card__name-group">
          <p className="card__title">{card.nameRU}</p>
          {onCardLike ? (
            <button
              className={`card__button${isLiked ? ' card__button_active' : ''}`}
              onClick={handleLikeClick}
              aria-label="Лайк"
              type="button"
            />
          ) : (
            <button
              className="card__button card__button_type_delete"
              aria-label="Дизлайк"
              type="button"
              onClick={() => onCardDislike(card.movieId)}
            />
          )}
        </div>
        <p className="card__duration">{formatDuration(card.duration)}</p>
      </div>
    </article>
  );
}

MoviesCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    movieId: PropTypes.number,
    country: PropTypes.string,
    director: PropTypes.string,
    duration: PropTypes.number,
    year: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        url: PropTypes.string,
        formats: PropTypes.shape({
          thumbnail: PropTypes.shape({
            url: PropTypes.string,
          }),
        }),
      }),
    ]),
    trailerLink: PropTypes.string,
    nameRU: PropTypes.string,
    nameEN: PropTypes.string,
  }),
  onCardLike: PropTypes.func,
  onCardDislike: PropTypes.func,
  savedMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
};

MoviesCard.defaultProps = {
  savedMovies: [],
  onCardLike: null,
};
