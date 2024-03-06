import React, { useEffect } from "react";
import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies"
import Profile from "../Profile/Profile"
import NotFound from "../NotFound/NotFound";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import cardsData from "../../utils/moviesData.json"; // временные данные

export default function App() {
  const location = useLocation();
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerPaths = ['/', '/movies', '/saved-movies'];

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [user, setUser] = React.useState({
    name: "Виталий",
    email: "pochta@yandex.ru",
  }) // временнно установленный пользователь

  useEffect(() => {
    setCards(cardsData); // временнно установленные карточки
    setLoggedIn(true)
  }, []);

  return (
    <CurrentUserContext.Provider value={user}>
      <div className="page">
        {headerPaths.includes(location.pathname) && (
          <Header
            loggedIn={loggedIn}
          />
        )}
        <Routes>
          <Route
            path="/"
            element={<Main />}
          />
          <Route
            path="/movies"
            element={<Movies
              cards={cards}
            />}
          />
          <Route
            path="/saved-movies"
            element={<SavedMovies
            />}
          />
          <Route
            path="/profile"
            element={<Profile setUser={setUser} />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
        {footerPaths.includes(location.pathname) && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  )
}
