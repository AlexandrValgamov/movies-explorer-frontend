import { useEffect, useState } from 'react';
import './MoviesCard.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { checkIsLiked } from '../../utils/utils';

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
        image: `https://api.nomoreparties.co/${card.image.url}`,
        trailerLink: `https://api.nomoreparties.co/${card.trailerLink}`,
        thumbnail: `https://api.nomoreparties.co/${card.image.formats.thumbnail.url}`,
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
      };
      onCardLike(movieData);
      setIsLiked(true);
    } else {
      onCardDislike(card.id);
      setIsLiked(false);
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
          src={
            onCardLike
              ? `https://api.nomoreparties.co/${card.image.url}`
              : card.image
          }
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
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    movieId: PropTypes.number,
    nameRU: PropTypes.string,
    nameEN: PropTypes.string,
    country: PropTypes.string,
    director: PropTypes.string,
    duration: PropTypes.number,
    year: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
      formats: PropTypes.shape({
        thumbnail: PropTypes.shape({
          url: PropTypes.string,
        }),
      }),
    }),
    trailerLink: PropTypes.string,
  }).isRequired,
  onCardLike: PropTypes.func,
  onCardDislike: PropTypes.func,
  savedMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      nameRU: PropTypes.string,
      nameEN: PropTypes.string,
    }),
  ),
};
