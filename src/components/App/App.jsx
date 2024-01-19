import React, { useEffect } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";

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
        // element={Main}
        />
      </Routes>

    </div>
  )
}

export default App
