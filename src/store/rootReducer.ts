import { tagsHomeReducer } from 'features/TagsHome/model/reducer/tagsHomeReducer';
import { combineReducers } from 'redux';
import { loginReducer } from 'widgets/Login/model/reducer/loginReducer';
import { postsReducer } from 'widgets/PreviewPosts/model/reducer/postsReducer';

export const rootReducer = combineReducers({
  user: loginReducer,
  posts: postsReducer,
  tagsHome: tagsHomeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
