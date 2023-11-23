import { ActionCreator, AnyAction } from 'redux';
import { CHANGE_TAGS } from '../type/tagsFilterType';

export const tagsFilter: ActionCreator<AnyAction> = (id: number) => ({
  type: CHANGE_TAGS,
  payload: id,
});
