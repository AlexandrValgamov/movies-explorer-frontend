import React, { useEffect } from 'react';
import './App.css';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { api } from '../../utils/MainApi';
import { apiMovies } from '../../utils/MoviesApi';
import {
  errorHandlerLogin,
  errorHandlerProfileUpdate,
  errorHandlerRegistration,
} from '../../utils/errorHandler';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';
import {
  ERROR_FETCHING_MOVIES,
  SEARCH_ERROR,
  SEARCH_NOT_FOUND,
} from '../../utils/errorMessages';
import {
  AUTH_TOKEN_KEY,
  FOOTER_PATHS,
  HEADER_PATHS,
  SEARCH_DATA_KEY,
  SUCCESS_MESSAGE_TIMEOUT,
  UNAUTHORIZED_ERROR_CODE,
} from '../../utils/constants';
import { filterShortMovies } from '../../utils/utils';

export default function App() {
  const location = useLocation();

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isAuthenticating, setIsAuthenticating] = React.useState(true);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [user, setUser] = React.useState({});
  const [errorServerMessage, setErrorServerMessage] = React.useState('');
  const navigate = useNavigate();

  const handleRegister = ({ password, email, name }) => {
    setIsLoading(true);
    api
      .register(password, email, name)
      .then((userData) => {
        handleLogin({ email: userData.email, password });
      })
      .catch((errorCode) => {
        errorHandlerRegistration(errorCode, setErrorServerMessage);
      })
      .finally(() => setIsLoading(false));
  };

  const handleLogin = ({ email, password }) => {
    setIsLoading(true);
    api
      .login(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem(AUTH_TOKEN_KEY, data.token);
          setLoggedIn(true);
          navigate('/movies', { replace: true });
        } else {
          throw UNAUTHORIZED_ERROR_CODE;
        }
      })
      .catch((errorCode) => {
        errorHandlerLogin(errorCode, setErrorServerMessage);
      })
      .finally(() => setIsLoading(false));
  };

  const handleEditProfile = ({ name, email }) => {
    setIsLoading(true);
    api
      .updateUserInfo(name, email)
      .then((userData) => {
        setUser(userData);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), SUCCESS_MESSAGE_TIMEOUT);
      })
      .catch((errorCode) => {
        errorHandlerProfileUpdate(errorCode, setErrorServerMessage);
      })
      .finally(() => setIsLoading(false));
  };

  const handleSignOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    navigate('/', { replace: true });
    setUser({});
    setMovies([]);
  };

  const handleSearchMovie = (searchQuery, isFilter, setError) => {
    setIsLoading(true);
    apiMovies
      .getMovies()
      .then((movies) => {
        const searchMovies = movies.filter((movie) => {
          const lowercasedQuery = searchQuery.toLowerCase();
          return (
            (movie.nameRU &&
              movie.nameRU.toLowerCase().includes(lowercasedQuery)) ||
            (movie.nameEN &&
              movie.nameEN.toLowerCase().includes(lowercasedQuery))
          );
        });
        const filteredMovies = isFilter
          ? filterShortMovies(searchMovies)
          : searchMovies;
        const searchData = {
          searchQuery: searchQuery,
          isFilter: isFilter,
          searchedMovies: filteredMovies,
        };
        localStorage.setItem(SEARCH_DATA_KEY, JSON.stringify(searchData));
        setMovies(filteredMovies);
        if (filteredMovies.length === 0) {
          setError(SEARCH_NOT_FOUND);
        }
      })
      .catch((err) => {
        setError(SEARCH_ERROR);
        console.error(ERROR_FETCHING_MOVIES, err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCardLike = (movie) => {
    const isLiked = savedMovies.some(
      (savedMovie) => savedMovie.movieId === movie.movieId,
    );
    if (!isLiked) {
      api
        .saveMovie(movie)
        .then((newMovie) => {
          setSavedMovies((prevState) => [...prevState, newMovie]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleCardDislike = (id) => {
    const movie = savedMovies.find(({ movieId }) => movieId === id);
    if (movie._id) {
      api
        .deleteMovie(movie._id)
        .then((data) => {
          if (data) {
            setSavedMovies((prevState) =>
              prevState.filter((movie) => movie.movieId !== id),
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (token) {
      api
        .checkToken(token)
        .then((isValid) => {
          if (isValid) setLoggedIn(true);
        })
        .catch((error) => {
          localStorage.removeItem(AUTH_TOKEN_KEY);
          setLoggedIn(false);
          console.log(error);
        })
        .finally(() => setIsAuthenticating(false));
    } else {
      setIsAuthenticating(false);
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUserInfo(), api.getSavedMovies()])
        .then(([userData, savedMovies]) => {
          setUser(userData);
          setSavedMovies(savedMovies);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [loggedIn]);

  if (isAuthenticating) {
    return <Preloader />;
  }

  return (
    <CurrentUserContext.Provider value={user}>
      <div className="page">
        {HEADER_PATHS.includes(location.pathname) && (
          <Header loggedIn={loggedIn} />
        )}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                savedMovies={savedMovies}
                movies={movies}
                setMovies={setMovies}
                handleSearchMovie={handleSearchMovie}
                loggedIn={loggedIn}
                isLoading={isLoading}
                onCardLike={handleCardLike}
                onCardDislike={handleCardDislike}
              />
            }
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                movies={savedMovies}
                setMovies={setMovies}
                handleSearchMovie={handleSearchMovie}
                loggedIn={loggedIn}
                onCardDislike={handleCardDislike}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                setLoggedIn={setLoggedIn}
                loggedIn={loggedIn}
                isLoading={isLoading}
                isSuccess={isSuccess}
                errorForm={errorServerMessage}
                setErrorForm={setErrorServerMessage}
                handleEditProfile={handleEditProfile}
                handleSignOut={handleSignOut}
              />
            }
          />

          <Route
            path="/signin"
            element={
              loggedIn ? (
                <Navigate to="/movies" replace />
              ) : (
                <Login
                  errorForm={errorServerMessage}
                  setErrorForm={setErrorServerMessage}
                  handleLogin={handleLogin}
                  setLoggedIn={setLoggedIn}
                  isLoading={isLoading}
                />
              )
            }
          />
          <Route
            path="/signup"
            element={
              loggedIn ? (
                <Navigate to="/movies" replace />
              ) : (
                <Register
                  errorForm={errorServerMessage}
                  setErrorForm={setErrorServerMessage}
                  setUser={setUser}
                  handleRegister={handleRegister}
                  isLoading={isLoading}
                />
              )
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {FOOTER_PATHS.includes(location.pathname) && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}
