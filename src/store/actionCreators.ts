import * as LoginActionCreators from '../widgets/Login/model/action-creators/login';
import * as LogoutActionCreators from '../widgets/Login/model/action-creators/logout';

const ActionCreators = {
  ...LoginActionCreators,
  ...LogoutActionCreators,
};

export default ActionCreators;
