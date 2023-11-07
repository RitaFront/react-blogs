import { ActionCreator } from 'redux';
import {
  LogoutRequestAction,
  LoginActionTypes,
} from '../type/loginType';

export const logoutRequest: ActionCreator<
  LogoutRequestAction
> = () => ({
  type: LoginActionTypes.LOGOUT_REQUEST,
});
