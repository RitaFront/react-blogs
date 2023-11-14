import * as LoginActionCreators from '../widgets/Login/model/action-creators/login';
import * as LogoutActionCreators from '../widgets/Login/model/action-creators/logout';
import * as PostsActionCreators from '../widgets/PreviewPosts/model/action-creators/posts';
import * as TagsHomeActionCreators from '../features/TagsHome/model/action-creators/tagsHome';

const ActionCreators = {
  ...LoginActionCreators,
  ...LogoutActionCreators,
  ...PostsActionCreators,
  ...TagsHomeActionCreators,
};

export default ActionCreators;
