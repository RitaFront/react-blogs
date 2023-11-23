import { Action, ActionCreator } from 'redux';
import {
  IPost,
  PostsActionTypes,
  PostsRequestAction,
  PostsRequestErrorAction,
  PostsRequestSuccessAction,
} from '../type/postsType';
import axios from 'axios';
import { getTimePost } from 'entities/PreviewPost/lib/getTimePost';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store/rootReducer';

export const postsByTagRequest: ActionCreator<
  PostsRequestAction
> = () => ({
  type: PostsActionTypes.POSTS_BY_TAG_REQUEST,
});

export const postsByTagRequestSuccess: ActionCreator<
  PostsRequestSuccessAction
> = (posts: IPost[]) => ({
  type: PostsActionTypes.POSTS_BY_TAG_REQUEST_SUCCESS,
  payload: posts,
});

export const postsByTagRequestError: ActionCreator<
  PostsRequestErrorAction
> = (error: Error) => ({
  type: PostsActionTypes.POSTS_BY_TAG_REQUEST_ERROR,
  payload: String(error),
});

export const postsByTagRequestAsync =
  (
    tagName: string
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch) => {
    dispatch(postsByTagRequest());
    axios
      .get(`http://localhost:3000/blog/posts/by-tag/${tagName}`)
      .then((res) => {
        const posts: IPost[] = res.data.posts.map((item: IPost) => {
          return {
            post: {
              id: item.post.id,
              date: getTimePost(item.post.date),
              image: item.post.image,
              title: item.post.title,
              body: item.post.body,
              tags: item.post.tags,
              comments: item.post.comments,
            },
            user: {
              about: item.user.about,
              avatar: item.user.avatar,
              birthday: item.user.birthday,
              login: item.user.login,
              userName: item.user.userName,
              token: item.user.token,
            },
          };
        });
        return posts;
      })
      .then((posts) => {
        dispatch(postsByTagRequestSuccess(posts));
      })
      .catch((err) => {
        dispatch(postsByTagRequestError(err));
      });
  };
