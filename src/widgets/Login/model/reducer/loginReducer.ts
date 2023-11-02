import { Reducer } from 'redux';
import {
  LoginAction,
  LoginActionTypes,
  LoginState,
} from '../type/loginType';

const initialState: LoginState = {
  data: {},
  error: '',
  loading: false,
};

export const loginReducer: Reducer<LoginState, LoginAction> = (
  state = initialState,
  action
): LoginState => {
  switch (action.type) {
    case LoginActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LoginActionTypes.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case LoginActionTypes.LOGIN_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LoginActionTypes.LOGOUT_REQUEST:
      return {
        ...state,
        data: {},
      };
    default:
      return state;
  }
};
