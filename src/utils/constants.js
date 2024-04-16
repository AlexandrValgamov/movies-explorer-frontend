export const HEADER_PATHS = ['/', '/movies', '/saved-movies', '/profile'];
export const FOOTER_PATHS = ['/', '/movies', '/saved-movies'];

export const LOADING_MESSAGE = 'Загрузка...';
export const AUTH_TOKEN_KEY = 'token';
export const SEARCH_DATA_KEY = 'searchData';
export const SUCCESS_MESSAGE_TIMEOUT = 5000;
export const UNAUTHORIZED_ERROR_CODE = 401;

export const EMAIL_MIN_LENGTH = 5;
export const EMAIL_MAX_LENGTH = 30;
export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_MAX_LENGTH = 20;
export const MIN_NAME_LENGTH = 2;
export const MAX_NAME_LENGTH = 30;

export const RESIZE_THRESHOLD_SMALL = 760;
export const RESIZE_THRESHOLD_LARGE = 900;
export const CARDS_COUNT_SMALL = 5;
export const CARDS_COUNT_MEDIUM = 8;
export const CARDS_COUNT_LARGE = 16;
export const INCREMENT_SMALL = 2;
export const INCREMENT_LARGE = 4;

export const AUTH_TEXTS = {
  '/signin': {
    text: 'Ещё не зарегистрированы?',
    link: '/signup',
    linkText: 'Регистрация',
    buttonText: 'Войти'
  },
  '/signup': {
    text: 'Уже зарегистрированы?',
    link: '/signin',
    linkText: 'Войти',
    buttonText: 'Зарегистрироваться'
  }
};

export const API_BEATFILM_CONFIG = {
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
};

export const API_CONFIG = {
  baseUrl: 'https://api.alexvpraktikum.nomoredomainsmonster.ru',
  headers: {
    'Content-Type': 'application/json'
  }
};

export const BASE_IMAGE_URL = 'https://api.nomoreparties.co';

export const LOGGED_IN_LINKS = [
  { to: '/', text: 'Главная', activePath: '/' },
  { to: '/movies', text: 'Фильмы', activePath: '/movies' },
  { to: '/saved-movies', text: 'Сохраненные фильмы', activePath: '/saved-movies' },
];

export const LOGGED_OUT_LINKS = [
  { to: '/signup', text: 'Регистрация' },
  { to: '/signin', text: 'Войти' },
];

export const EMAIL_PATTERN = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const NAME_PATTERN = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/;
