import config from '../config';

const getInitialStorage = () => {
  if (!window.localStorage.getItem('loginData')) {
    return window.sessionStorage;
  }

  return window.localStorage;
};

class API {
  storage = getInitialStorage();

  setStorage(storage) {
    this.storage = storage;
  }

  setPersistedData(key, value) {
    this.storage.setItem(key, value);
  }

  getPersistedData(key) {
    return this.storage.getItem(key);
  }

  request(apiMethod, reqMethod = 'GET', body) {
    const headers = {
      'Content-Type': 'application/json'
    };


    const persistedLoginData = this.getPersistedData('loginData');

    let token;

    if (persistedLoginData) {
      token = JSON.parse(persistedLoginData).token;
    }

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const fetchOptions = {
      headers,
      method: reqMethod
    };

    if (body) {
      fetchOptions.body = JSON.stringify(body);
    }

    return fetch(config.endpoint + apiMethod, fetchOptions)
  }
}

export default new API();
