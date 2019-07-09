// * CONSTANTS
const LOGIN_SUCCESS = 'app/login/LOGIN_SUCCESS';
const LOGOUT = 'app/login/LOGOUT';
const ACCESS_TOKEN = 'access_token';

// * INITIAL STATE
export const auth = {
  get isAuthenticated () {
    return false;
  },
  set accessToken (token = '') {
    this.storage().setItem(ACCESS_TOKEN, token);
  },
  get accessToken () {
    return this.storage().getItem(ACCESS_TOKEN);
  },
  storage () {
    return window.sessionStorage;
  },
  clearStorage () {
    this.storage().setItem(ACCESS_TOKEN, '');
  }
};

// * REDUCERS
export default (state = auth, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      state.accessToken = action.accessToken
      break;
    }
    case LOGOUT: {
      state.clearStorage();
      break;
    }
    default:
      break;
  }

  return state;
}