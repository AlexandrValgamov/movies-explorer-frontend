import { API_CONFIG } from './constants.js'

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  checkToken = (token) => {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`,
      }
    })
      .then((res) => {
        if (res.ok) {
          return true;
        }
        return Promise.reject(res.status);
      })
  }

  register = (password, email, name) => {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({
        password,
        email,
        name,
      })
    })
      .then(this._handleResponse);
  }

  login = (email, password) => {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({
        email,
        password,
      })
    })
      .then(this._handleResponse);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
      .then(this._handleResponse);
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
      .then(this._handleResponse);
  }

  updateUserInfo(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name,
        email,
      })
    })
      .then(this._handleResponse);
  }

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(movie)
    })
      .then(this._handleResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
      .then(this._handleResponse);
  }

  postMovie(
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN
  ) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN,
      })
    })
      .then(this._handleResponse);
  }
}

export const api = new Api(API_CONFIG);