import { createReducer } from 'redux-act';
import { AuthStateType, ErrorType, User } from './types';
import initialState from './state';
import {
  signInStart,
  signInSuccess,
  signInError,
  signUpStart,
  signUpSuccess,
  signUpError,
} from './actions';

export const onSignInStart = (state: AuthStateType) => ({
  ...state,
  isLoading: true,
});

export const onSignInSuccess = (state: AuthStateType, payload: User) => ({
  ...state,
  currentUser: payload,
  isLoading: false,
});

export const onSignInError = (state: AuthStateType, payload: ErrorType) => ({
  ...initialState,
  error: payload,
});

export const onSignUpStart = (state: AuthStateType) => ({
  ...state,
  isLoading: true,
});

export const onSignUpSuccess = (state: AuthStateType, payload: User) => ({
  ...state,
  currentUser: payload,
  isLoading: false,
});

export const onSignUpError = (state: AuthStateType, payload: ErrorType) => ({
  ...initialState,
  error: payload,
});

export const authReducer = createReducer<AuthStateType>({}, initialState)
  .on(signInStart, onSignInStart)
  .on(signInSuccess, onSignInSuccess)
  .on(signInError, onSignInError)
  .on(signUpStart, onSignUpStart)
  .on(signUpSuccess, onSignUpSuccess)
  .on(signUpError, onSignUpError);

export default authReducer;
