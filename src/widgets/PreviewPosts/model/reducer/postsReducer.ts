import { Reducer } from 'redux';
import {
  PostsState,
  PostsAction,
  PostsActionTypes,
} from '../type/postsType';

const initialState: PostsState = {
  posts: [],
  error: '',
  loading: false,
};

export const postsReducer: Reducer<PostsState, PostsAction> = (
  state = initialState,
  action
): PostsState => {
  switch (action.type) {
    case PostsActionTypes.POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PostsActionTypes.POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case PostsActionTypes.POSTS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
