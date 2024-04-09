import { useState } from 'react';
import './MoviesCard.css';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export default function MoviesCard({ card }) {
  const [isLiked, setIsLiked] = useState(false);
  let location = useLocation();

  function handleLikeClick() {
    setIsLiked((prev) => !prev);
  }

  function formatDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return (hours > 0 ? `${hours}ч ` : '') + (minutes > 0 ? `${minutes}м` : '');
  }

  return (
    <article className="card">
      <img
        className="card__image"
        src={`https://api.nomoreparties.co/${card.image.url}`}
        alt={card.nameRU}
      />
      <div className="card__widget">
        <div className="card__name-group">
          <p className="card__title">{card.nameRU}</p>
          {location.pathname === '/movies' ? (
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
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    nameRU: PropTypes.string,
    duration: PropTypes.number,
    isLiked: PropTypes.bool,
  }).isRequired,
};
