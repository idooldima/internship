import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { signUpStart, signUpSuccess, signUpError, signInSuccess, signInError } from './actions';
import axios from 'axios';
import { Credentials, User } from './types';
import { SagaActionType } from '../types';

export const signInSaga = function* ({
  payload: { email, password },
}: SagaActionType<Credentials>): SagaIterator {
  try {
    const result = yield call(axios.post, 'http://localhost:1337/auth/local', {
      email,
      password,
    });
    yield put(signInSuccess(result.data as User));
  } catch (error: any) {
    yield put(signInError(error));
  }
};

export const signUpSaga = function* ({
  payload: { username, email, password },
}: SagaActionType<Credentials>): SagaIterator {
  try {
    const result = yield call(axios.post, 'http://localhost:1337/auth/local/register', {
      username,
      email,
      password,
    });
    yield put(signUpSuccess(result.data as User));
  } catch (error: any) {
    yield put(signUpError(error));
  }
};

export default function* root() {
  yield takeLatest(signUpStart, signUpSaga);
}
