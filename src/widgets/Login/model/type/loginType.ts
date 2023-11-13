export interface IUser {
  about?: string;
  avatar?: string;
  birthday?: string;
  login?: string;
  userName?: string;
  token?: string;
}

export interface LoginState {
  data: IUser;
  error: string;
  loading: boolean;
}

export enum LoginActionTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS',
  LOGIN_REQUEST_ERROR = 'LOGIN_REQUEST_ERROR',
  LOGOUT_REQUEST = 'LOGOUT_REQUEST',
}

export interface LoginRequestAction {
  type: LoginActionTypes.LOGIN_REQUEST;
}

export interface LoginRequestSuccessAction {
  type: LoginActionTypes.LOGIN_REQUEST_SUCCESS;
  payload: IUser;
}

export interface LoginRequestErrorAction {
  type: LoginActionTypes.LOGIN_REQUEST_ERROR;
  payload: string;
}

export interface LogoutRequestAction {
  type: LoginActionTypes.LOGOUT_REQUEST;
}

export type LoginAction =
  | LoginRequestAction
  | LoginRequestSuccessAction
  | LoginRequestErrorAction
  | LogoutRequestAction;
