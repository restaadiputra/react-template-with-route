// * CONSTANTS
const LOGIN = 'app/login/LOGIN';
const LOGOUT = 'app/login/LOGOUT';
const ACCESS_TOKEN = 'access_token';

// * INITIAL STATE
export const auth = {
  get isAuthenticated () {
    return (
      this.accessToken !== '' && this.accessToken !== null
    );
  },
  set accessToken (token) {
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
export default (state = auth, { type, payload }) => {
  switch (type) {
    case LOGIN: {
      state.accessToken = payload
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
};


// * ACTIONS
export const handleLoginAction = (accessToken = 'access_token') => ({
  type: LOGIN,
  payload: accessToken
});

export const handleLogoutAction = () => ({
  type: LOGOUT
})
