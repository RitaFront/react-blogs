import { Reducer } from 'redux';
import { CHANGE_TAGS, TagsFilterState } from '../type/tagsFilterType';

const initialState: TagsFilterState = {
  tagsId: 0,
};

export const tagsFilterReducer: Reducer<TagsFilterState> = (
  state = initialState,
  action
): TagsFilterState => {
  switch (action.type) {
    case CHANGE_TAGS:
      return {
        ...state,
        tagsId: action.payload,
      };
    default:
      return state;
  }
};
