import { Action, ActionCreator } from 'redux';
import { RootState } from 'store/rootReducer';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import {
  LoginRequestAction,
  LoginActionTypes,
  LoginRequestSuccessAction,
  IUser,
  LoginRequestErrorAction,
} from '../type/loginType';

export const loginRequest: ActionCreator<
  LoginRequestAction
> = () => ({
  type: LoginActionTypes.LOGIN_REQUEST,
});

export const loginRequestSuccess: ActionCreator<
  LoginRequestSuccessAction
> = (data: IUser) => ({
  type: LoginActionTypes.LOGIN_REQUEST_SUCCESS,
  payload: data,
});

export const loginRequestError: ActionCreator<
  LoginRequestErrorAction
> = (error: Error) => ({
  type: LoginActionTypes.LOGIN_REQUEST_ERROR,
  payload: String(error),
});

export const loginRequestAsync =
  (
    token: string
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch) => {
    dispatch(loginRequest());
    axios
      .get('http://localhost:3000/users/profile', {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        dispatch(
          loginRequestSuccess({
            about: res.data.user.about,
            avatar: res.data.user.avatar,
            birthday: res.data.user.birthday,
            login: res.data.user.login,
            userName: res.data.user.userName,
            token: res.data.user.token,
          })
        );
      })
      .catch((error) => {
        console.log(error);
        dispatch(loginRequestError(error));
      });
  };
