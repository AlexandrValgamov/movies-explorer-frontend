import React, { useEffect } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import cardsData from "../../utils/cardsData.json"; // временные данные

function App() {

  const [loggedIn, setLoggedIn] = React.useState(true);
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    setCards(cardsData); // временнно установленные карточки
    setLoggedIn(true)
  }, []);

  return (
    <div className="page">
      <Header
        loggedIn={loggedIn}
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
