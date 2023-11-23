import axios from 'axios';
import { TagsHome } from 'features/TagsHome';
import { TagsFilterState } from 'features/TagsHome/model/type/tagsFilterType';
import { TagsHomeState } from 'features/TagsHome/model/type/tagsHomeType';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { PaginationBlock } from 'shared/ui/Pagination';
import { Tags } from 'shared/ui/Tags';
import { useActions } from 'store/hooks/useActions';
import { RootState } from 'store/rootReducer';
import { PreviewPosts } from 'widgets/PreviewPosts';

const currentPage = 2;
const totalPages = 5;

export const Home: React.FC = () => {
  const handleClickPage = (page: number) => {
    console.log('page', page);
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const tag = searchParams.get('tags');
  const {
    postsByTagRequestAsync,
    postsRequestAsync,
    tagsHomeRequestAsync,
  } = useActions();
  tagsHomeRequestAsync();

  useEffect(() => {
    if (tag) {
      tag === 'Все'
        ? postsRequestAsync()
        : postsByTagRequestAsync(tag);
    } else {
      postsRequestAsync();
    }
  }, [tag]);

  return (
    <>
      <TagsHome />
      <PreviewPosts />
      <PaginationBlock
        currentPage={currentPage}
        totalPages={totalPages}
        onClickPage={handleClickPage}
      />
    </>
  );
};
