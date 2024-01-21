import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

function App() {

  const [loggedIn, setLoggedIn] = React.useState(true);

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
      </Routes>
      <Footer />
    </div>
  )
}

export default App
