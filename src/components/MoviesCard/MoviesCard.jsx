import { useState } from 'react';
import './MoviesCard.css';
import PropTypes from 'prop-types';

export default function MoviesCard({ card }) {

  const [isLiked, setIsLiked] = useState(false)

  function handleLikeClick() {
    setIsLiked(prev => !prev);
  }

  function formatDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return (hours > 0 ? `${hours}ч ` : '') + (minutes > 0 ? `${minutes}м` : '');
  }

  return (
    <article className='card'>
      <img
        className='card__image'
        src={`https://api.nomoreparties.co/${card.image.url}`}
        alt={card.nameRU}
      />
      <div className="card__widget">
        <div className="card__name-group">
          <p className="card__title">{card.nameRU}</p>
          <button
            className={`card__like-button${isLiked ? ' card__like-button_active' : ''}`}
            onClick={handleLikeClick}
            aria-label="Лайк"
            type="button"
          />
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
  }).isRequired,
};