import * as LoginActionCreators from '../widgets/Login/model/action-creators/login';
import * as LogoutActionCreators from '../widgets/Login/model/action-creators/logout';
import * as PostsActionCreators from '../widgets/PreviewPosts/model/action-creators/posts';
import * as PostsByTagActionCreators from '../widgets/PreviewPosts/model/action-creators/postsByTag';
import * as TagsHomeActionCreators from '../features/TagsHome/model/action-creators/tagsHome';
import * as TagsFilterActionCreators from '../features/TagsHome/model/action-creators/tagsFilter';

const ActionCreators = {
  ...LoginActionCreators,
  ...LogoutActionCreators,
  ...PostsActionCreators,
  ...TagsHomeActionCreators,
  ...PostsByTagActionCreators,
  ...TagsFilterActionCreators,
};

export default ActionCreators;
