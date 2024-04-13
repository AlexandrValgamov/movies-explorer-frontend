import { API_BEATFILM_CONFIG } from './constants.js'

class ApiMovies {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}`, {
      headers: {
        ...this._headers,
      }
    })
      .then(this._handleResponse);
  }

}

export const apiMovies = new ApiMovies(API_CONFIG);