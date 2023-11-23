import { useSelector } from 'react-redux';
import { Tags } from 'shared/ui/Tags';
import { RootState } from 'store/rootReducer';
import { TagsHomeState } from '../model/type/tagsHomeType';
import { useSearchParams } from 'react-router-dom';
import { useActions } from 'store/hooks/useActions';

export const TagsHome = () => {
  const { tags } = useSelector<RootState, TagsHomeState>(
    (state) => state.tagsHome
  );

  const { tagsFilter } = useActions();

  const [searchParams, setSearchParams] = useSearchParams();
  const tagActive = searchParams.get('tags');
  const tagActiveIndex = tags.findIndex((tag) => tag === tagActive);
  console.log(tagActiveIndex);

  const handleClickTags = (index: number) => {
    tagsFilter(index);
    if (index > 0) {
      setSearchParams({ tags: tags[index] });
    } else {
      searchParams.delete('tags');
      setSearchParams(searchParams);
    }
    console.log(tags[index], 'click');
  };

  return (
    <>
      {/* {tagActiveIndex > 0 && ( */}
      <Tags
        arr={tags}
        onClickTags={handleClickTags}
        tagActive={tagActiveIndex + 1}
      />
      {/* )} */}
    </>
  );
};
