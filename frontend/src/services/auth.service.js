import {post} from './utils.service';

export const login = async (email, password) => {
  const res = await post('auth/login', {username: email, password});
  return await res.json();
};
