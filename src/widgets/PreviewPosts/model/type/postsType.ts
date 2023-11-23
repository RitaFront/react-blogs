import { IUser } from 'widgets/Login/model/type/loginType';

export interface IPostData {
  id: string;
  date: number;
  image: string;
  title: string;
  body: string;
  tags: string[];
  comments: string[];
}

export interface IPost {
  post: IPostData;
  user: IUser;
}

export interface IPagination {
  currentPage: number;
  totalPages: number;
}

export interface PostsState {
  posts: IPost[];
  pagination: IPagination;
  error: string;
  loading: boolean;
}

export enum PostsActionTypes {
  POSTS_REQUEST = 'POSTS_REQUEST',
  POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS',
  POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR',
  POSTS_BY_TAG_REQUEST = 'POSTS_BY_TAG_REQUEST',
  POSTS_BY_TAG_REQUEST_SUCCESS = 'POSTS_BY_TAG_REQUEST_SUCCESS',
  POSTS_BY_TAG_REQUEST_ERROR = 'POSTS_BY_TAG_REQUEST_ERROR',
}

export interface PostsRequestAction {
  type:
    | PostsActionTypes.POSTS_REQUEST
    | PostsActionTypes.POSTS_BY_TAG_REQUEST;
}

export interface PostsRequestSuccessAction {
  type:
    | PostsActionTypes.POSTS_REQUEST_SUCCESS
    | PostsActionTypes.POSTS_BY_TAG_REQUEST_SUCCESS;
  payload: IPost[];
  pagination?: IPagination;
}

export interface PostsRequestErrorAction {
  type:
    | PostsActionTypes.POSTS_REQUEST_ERROR
    | PostsActionTypes.POSTS_BY_TAG_REQUEST_ERROR;
  payload: string;
}

export type PostsAction =
  | PostsRequestAction
  | PostsRequestSuccessAction
  | PostsRequestErrorAction;
