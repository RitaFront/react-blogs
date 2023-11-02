import { ActionCreator } from 'redux';
import {
  LoginActionTypes,
  LogoutRequestAction,
} from '../type/loginType';

export const logoutRequest: ActionCreator<
  LogoutRequestAction
> = () => ({
  type: LoginActionTypes.LOGOUT_REQUEST,
});
