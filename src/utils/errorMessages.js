// Сообщения об ошибках на странице логина
export const LOGIN_INCORRECT_CREDENTIALS = "Вы ввели неправильный логин или пароль.";
export const LOGIN_TOKEN_MISSING_OR_INVALID_FORMAT = "При авторизации произошла ошибка. Токен не передан или передан не в том формате.";
export const LOGIN_TOKEN_INVALID = "При авторизации произошла ошибка. Переданный токен некорректен.";

// Сообщения об ошибках на странице регистрации
export const REGISTRATION_EMAIL_EXISTS = "Пользователь с таким email уже существует.";
export const REGISTRATION_ERROR = "При регистрации пользователя произошла ошибка.";

// Сообщения об ошибках на странице обновления профиля
export const PROFILE_EMAIL_EXISTS = "Пользователь с таким email уже существует.";
export const PROFILE_UPDATE_ERROR = "При обновлении профиля произошла ошибка.";

// Общие ошибки сервера
export const SERVER_ERROR_500 = "500 На сервере произошла ошибка.";
export const SERVER_ERROR_404 = "404 Страница по указанному маршруту не найдена.";

// Сообщения об ошибках на странице поиска фильмов
export const SEARCH_NOT_FOUND = "Ничего не найдено";
export const SEARCH_ERROR = "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.";

export const INVALID_EMAIL_ERROR = 'Email должен быть действительным.';
export const INVALID_NAME_ERROR = 'Имя может содержать только буквы латиницы, кириллицы, пробелы и дефисы.';
export const ERROR_FETCHING_MOVIES = 'Ошибка при запросе фильмов:';
export const EMPTY_SEARCH_ERROR = 'Нужно ввести ключевое слово для поиска.';
