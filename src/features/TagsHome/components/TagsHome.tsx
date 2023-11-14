import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Tags } from 'shared/ui/Tags';
import { useActions } from 'store/hooks/useActions';
import { RootState } from 'store/rootReducer';
import { TagsHomeState } from '../model/type/tagsHomeType';

export const TagsHome = () => {
  const { tagsHomeRequestAsync } = useActions();
  useEffect(() => {
    tagsHomeRequestAsync();
  }, []);

  const { tags } = useSelector<RootState, TagsHomeState>(
    (state) => state.tagsHome
  );

  const handleClickTags = (index: number) => {
    console.log('tags', tags[index]);
  };

  return (
    <>
      <Tags arr={tags} onClickTags={handleClickTags} />
    </>
  );
};
