import { combineReducers } from 'redux';
import { loginReducer } from 'widgets/Login/model/reducer/loginReducer';

export const rootReducer = combineReducers({
  user: loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
