import { useNavigate } from 'react-router-dom';
import "./NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button
        className="not-found__button"
        type="button"
        onClick={handleClick}
      >
        Назад
      </button>
    </section>
  )
}
