import { Action, ActionCreator } from 'redux';
import {
  IPost,
  PostsActionTypes,
  PostsRequestAction,
  PostsRequestErrorAction,
  PostsRequestSuccessAction,
} from '../type/postsType';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store/rootReducer';
import axios from 'axios';
import { getTimePost } from 'entities/PreviewPost/lib/getTimePost';

export const postsRequest: ActionCreator<
  PostsRequestAction
> = () => ({
  type: PostsActionTypes.POSTS_REQUEST,
});

export const postsRequestSuccess: ActionCreator<
  PostsRequestSuccessAction
> = (posts: IPost[]) => ({
  type: PostsActionTypes.POSTS_REQUEST_SUCCESS,
  payload: posts,
});

export const postsRequestError: ActionCreator<
  PostsRequestErrorAction
> = (error: Error) => ({
  type: PostsActionTypes.POSTS_REQUEST_ERROR,
  payload: String(error),
});

export const postsRequestAsync =
  (): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch) => {
    dispatch(postsRequest());
    axios
      .get(`http://localhost:3000/blog/posts?page=1&postsPerPage=5`)
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
        dispatch(postsRequestSuccess(posts));
      })
      .catch((err) => {
        dispatch(postsRequestError(err));
      });
  };
