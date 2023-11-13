import * as LoginActionCreators from '../widgets/Login/model/action-creators/login';
import * as LogoutActionCreators from '../widgets/Login/model/action-creators/logout';
import * as PostsActionCreators from '../widgets/PreviewPosts/model/action-creators/posts';

const ActionCreators = {
  ...LoginActionCreators,
  ...LogoutActionCreators,
  ...PostsActionCreators,
};

export default ActionCreators;
