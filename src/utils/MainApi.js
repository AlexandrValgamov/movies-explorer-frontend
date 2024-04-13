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

  updateUserInfo(name, info) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name,
        about: info
      })
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

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/cards/${movieId}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
      .then(this._handleResponse);
  }

  //   changeLikeCardStatus(cardId, isLiked) {
  //     return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
  //       method: isLiked ? 'PUT' : 'DELETE',
  //       headers: {
  //         ...this._headers,
  //         authorization: `Bearer ${localStorage.getItem("jwt")}`,
  //       }
  //     })
  //       .then(this._handleResponse);
  //   }

  //   updateAvatar(link) {
  //     return fetch(`${this._baseUrl}/users/me/avatar`, {
  //       method: 'PATCH',
  //       headers: {
  //         ...this._headers,
  //         authorization: `Bearer ${localStorage.getItem("jwt")}`,
  //       },
  //       body: JSON.stringify({
  //         avatar: link
  //       })
  //     })
  //       .then(this._handleResponse);
  //   }
}

export const api = new Api(API_CONFIG);