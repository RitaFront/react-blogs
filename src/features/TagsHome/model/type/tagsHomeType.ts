export interface TagsHomeState {
  tags: string[];
  error: string;
  loading: boolean;
}

export enum TagsHomeActionTypes {
  TAGS_HOME_REQUEST = 'TAGS_HOME_REQUEST',
  TAGS_HOME_REQUEST_SUCCESS = 'TAGS_HOME_REQUEST_SUCCESS',
  TAGS_HOME_REQUEST_ERROR = 'TAGS_HOME_REQUEST_ERROR',
}

export interface TagsHomeRequestAction {
  type: TagsHomeActionTypes.TAGS_HOME_REQUEST;
}

export interface TagsHomeRequestSuccessAction {
  type: TagsHomeActionTypes.TAGS_HOME_REQUEST_SUCCESS;
  payload: string[];
}

export interface TagsHomeRequestErrorAction {
  type: TagsHomeActionTypes.TAGS_HOME_REQUEST_ERROR;
  payload: string;
}

export type TagsHomeAction =
  | TagsHomeRequestAction
  | TagsHomeRequestSuccessAction
  | TagsHomeRequestErrorAction;
