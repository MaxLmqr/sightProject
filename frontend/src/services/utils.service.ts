import {Store} from '../store/configure.store';
import AuthSlice from '../store/slices/auth.slice';

const apiUrl = 'http://192.168.0.31:3000/';

export const genHeaders = () => {
  const state = Store.getState();
  const token = state.authStore.token;
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: '',
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
};

export const queryBuilder = (query: any) => {
  let queryBuilderBase = '?';

  Object.keys(query).forEach(key => {
    queryBuilderBase += `${key}=${query[key]}&`;
  });
  return queryBuilderBase;
};

export const put = async (route: string, object: Object) => {
  console.log('ICIPut ' + apiUrl + route);
  let headers = genHeaders();
  return await fetch(apiUrl + route, {
    method: 'put',
    headers,
    body: JSON.stringify(object),
  });
};

export const get = async (route: string, object?: Object) => {
  let parameter = '';
  if (object) {
    parameter = queryBuilder(object);
  }
  console.log('ICIGet ' + apiUrl + route + parameter);
  let headers = genHeaders();
  const res = await fetch(apiUrl + route + parameter, {
    method: 'get',
    headers,
  });
  if (res.status === 401) {
    Store.dispatch(AuthSlice.actions.reset());
    console.log('token expired...');
  }

  return res;
};

export const del = async (route: string) => {
  let headers = genHeaders();
  return await fetch(apiUrl + route, {
    method: 'delete',
    headers,
  });
};

export const post = async (route: string, object: Object) => {
  console.log('ICIPost ' + apiUrl + route);
  let headers = genHeaders();
  return await fetch(apiUrl + route, {
    method: 'post',
    headers,
    body: JSON.stringify(object),
  });
};

export const patch = async (route: string, object: Object) => {
  console.log('ICIPatch ' + apiUrl + route);
  let headers = genHeaders();
  return await fetch(apiUrl + route, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(object),
  });
};
