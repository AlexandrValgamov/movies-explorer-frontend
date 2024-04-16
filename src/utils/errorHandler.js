import { LOGIN_INCORRECT_CREDENTIALS, PROFILE_EMAIL_EXISTS, PROFILE_UPDATE_ERROR, REGISTRATION_EMAIL_EXISTS, REGISTRATION_ERROR, SERVER_ERROR_404, SERVER_ERROR_500 } from "./errorMessages";

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

export const errorHandlerProfileUpdate = (errorCode, setErrorServerMessage) => {
  switch (errorCode) {
    case 404:
      setErrorServerMessage(SERVER_ERROR_404);
      break;
    case 500:
      setErrorServerMessage(SERVER_ERROR_500);
      break;
    case 409:
      setErrorServerMessage(PROFILE_EMAIL_EXISTS);
      break;
    default:
      setErrorServerMessage(PROFILE_UPDATE_ERROR);
  }
}