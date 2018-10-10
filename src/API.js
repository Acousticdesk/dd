import config from '../config';

const getInitialStorage = () => {
  if (!window.localStorage.getItem('loginData')) {
    return window.sessionStorage;
  }

  return window.localStorage;
};

class API {
  constructor() {
    this.storage = getInitialStorage();
  }

  setStorage(storage) {
    this.storage = storage;
  }

  setPersistedData(key, value) {
    this.storage.setItem(key, value);
  }

  removePersistedData(key) {
    this.storage.removeItem(key);
  }

  getPersistedData(key) {
    return this.storage.getItem(key);
  }

  request(apiMethod, reqMethod = 'GET', body) {
    const headers = {
      'Content-Type': 'application/json',
    };


    const persistedLoginData = this.getPersistedData('loginData');
    const token = persistedLoginData ? JSON.parse(persistedLoginData).token : null;

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const fetchOptions = {
      headers,
      method: reqMethod,
    };

    if (body) {
      fetchOptions.body = JSON.stringify(body);
    }

    return fetch(config.endpoint + apiMethod, fetchOptions);
  }
}

const api = new API();

export const loginRequest = (email, password) => api.request('auth', 'POST', { email, password })
  .then((res) => {
    if (res.status !== 200) {
      throw new Error(res.status);
    }

    return res.json();
  });

export const updatePlacement = values => API.request('updatePlacement', 'POST', values)
  .then(() => window.setTimeout(() => {
    this.setState({
      loader: false,
    });
  }, 1000));

export default api;
