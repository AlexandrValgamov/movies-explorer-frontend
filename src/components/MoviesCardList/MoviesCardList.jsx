import "./MoviesCardList.css";
import PropTypes from 'prop-types';
import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect, useState } from "react";

export default function MoviesCardList({ cards }) {
  const [cardsCount, setCardsCount] = useState(16);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 760) {
        setCardsCount(5)
      } else if (window.innerWidth >= 900) {
        setCardsCount(16)
      } else {
        setCardsCount(8)
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="cards">
      <div className="cards__gallary" aria-label="Галерея">
        {cards && cards.slice(0, cardsCount).map(
          card => <MoviesCard
            key={card.id}
            card={card}
          // onCardLike={onCardLike}
          />
        )}
      </div>
      {cards?.length > cardsCount && <button className="cards__button">
        Ещё
      </button>}
    </section>
  );
}

MoviesCardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};
