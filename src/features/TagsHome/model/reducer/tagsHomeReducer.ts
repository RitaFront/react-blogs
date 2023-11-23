import { Reducer } from 'redux';
import {
  TagsHomeAction,
  TagsHomeActionTypes,
  TagsHomeState,
} from '../type/tagsHomeType';

const initialState: TagsHomeState = {
  tags: [],
  error: '',
  loading: false,
};

export const tagsHomeReducer: Reducer<
  TagsHomeState,
  TagsHomeAction
> = (state = initialState, action): TagsHomeState => {
  switch (action.type) {
    case TagsHomeActionTypes.TAGS_HOME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TagsHomeActionTypes.TAGS_HOME_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: ['Все', ...action.payload],
      };
    case TagsHomeActionTypes.TAGS_HOME_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
