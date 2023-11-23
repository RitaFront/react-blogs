import { Action, ActionCreator } from 'redux';
import {
  IPagination,
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
> = (posts: IPost[], pagination: IPagination) => ({
  type: PostsActionTypes.POSTS_REQUEST_SUCCESS,
  payload: posts,
  pagination,
});

export const postsRequestError: ActionCreator<
  PostsRequestErrorAction
> = (error: Error) => ({
  type: PostsActionTypes.POSTS_REQUEST_ERROR,
  payload: String(error),
});

export const postsRequestAsync =
  (
    currentPage: number
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch) => {
    dispatch(postsRequest());
    axios
      .get(
        `http://localhost:3000/blog/posts?page=${currentPage}&postsPerPage=5`
      )
      .then((res) => {
        const pagination: IPagination = res.data.pagination;
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
        return { posts, pagination };
      })
      .then(({ posts, pagination }) => {
        dispatch(postsRequestSuccess(posts, pagination));
      })
      .catch((err) => {
        dispatch(postsRequestError(err));
      });
  };
