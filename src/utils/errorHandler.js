import { LOGIN_INCORRECT_CREDENTIALS, LOGIN_TOKEN_INVALID, LOGIN_TOKEN_MISSING_OR_INVALID_FORMAT, REGISTRATION_EMAIL_EXISTS, REGISTRATION_ERROR, SERVER_ERROR_404, SERVER_ERROR_500 } from "./errorMessages";

export const errorHandlerRegistration = (errorCode, setErrorServerMessage) => {
  switch (errorCode) {
    case 404:
      setErrorServerMessage(SERVER_ERROR_404);
      break;
    case 500:
      setErrorServerMessage(SERVER_ERROR_500);
      break;
    case 409:
      setErrorServerMessage(REGISTRATION_EMAIL_EXISTS);
      break;
    default:
      setErrorServerMessage(REGISTRATION_ERROR);
  }
}

export const errorHandlerLogin = (errorCode, setErrorServerMessage) => {
  switch (errorCode) {
    case 404:
      setErrorServerMessage(SERVER_ERROR_404);
      break;
    case 500:
      setErrorServerMessage(SERVER_ERROR_500);
      break;
    default:
      setErrorServerMessage(LOGIN_INCORRECT_CREDENTIALS);
  }
}