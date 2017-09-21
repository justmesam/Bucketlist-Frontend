import instance from '../constants/axiosConfig';

const REGISTER = 'REGISTER';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const RESET_PASSWORD = 'RESET_PASSWORD';
const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
const DELETE_USER = 'DELETE_USER';

export const registerUser = ({ email, password }) => ({
  type : REGISTER,
  payload : instance.post('/auth/register/',{ email, password })
});

export const loginUser = ({email, password}) => ({
  type : LOGIN,
  payload: instance.post('/auth/login/',
                          {email, password})
});

export const logoutUser = () => ({
  type : LOGOUT,
  payload: instance.post('/auth/logout/')
});

export const resetPassword = (email) => ({
  type : RESET_PASSWORD,
  payload: instance.post('/auth/reset_password/',
                          {email})
});

export const changePassword = ({old_password, new_password, confirm_password}) => ({
  type : CHANGE_PASSWORD,
  payload: instance.post('/auth/change_password/',
                          {old_password, new_password, confirm_password})
});

export const deleteUser = (password) => ({
  type : DELETE_USER,
  payload: instance.post('/auth/delete/',
                          {password})
});
