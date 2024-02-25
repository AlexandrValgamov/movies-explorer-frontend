import React, { useEffect } from "react";
import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import cardsData from "../../utils/cardsData.json"; // временные данные

function App() {
  let location = useLocation();

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    setCards(cardsData); // временнно установленные карточки
    setLoggedIn(false)
  }, []);

  return (
    <div className="page">
      <Header
        loggedIn={loggedIn}
        location={location}
      />
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
      </Routes>
      <Footer />
    </div>
  )
}

export default App
