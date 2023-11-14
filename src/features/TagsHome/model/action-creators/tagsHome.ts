import { Action, ActionCreator } from 'redux';
import {
  TagsHomeActionTypes,
  TagsHomeRequestAction,
  TagsHomeRequestErrorAction,
  TagsHomeRequestSuccessAction,
} from '../type/tagsHomeType';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store/rootReducer';
import axios from 'axios';

export const tagsHomeRequest: ActionCreator<
  TagsHomeRequestAction
> = () => ({
  type: TagsHomeActionTypes.TAGS_HOME_REQUEST,
});

export const tagsHomeRequestSuccess: ActionCreator<
  TagsHomeRequestSuccessAction
> = (tags: string[]) => ({
  type: TagsHomeActionTypes.TAGS_HOME_REQUEST_SUCCESS,
  payload: tags,
});

export const tagsHomeRequestError: ActionCreator<
  TagsHomeRequestErrorAction
> = (error: Error) => ({
  type: TagsHomeActionTypes.TAGS_HOME_REQUEST_ERROR,
  payload: String(error),
});

export const tagsHomeRequestAsync =
  (): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch) => {
    dispatch(tagsHomeRequest());
    axios
      .get('http://localhost:3000/blog/tags')
      .then((res) => {
        const tagsHome: string[] = res.data.tags;
        dispatch(tagsHomeRequestSuccess(tagsHome));
      })
      .catch((err) => {
        dispatch(tagsHomeRequestError(err));
      });
  };
