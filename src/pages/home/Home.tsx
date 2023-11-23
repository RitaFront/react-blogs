import { TagsHome } from 'features/TagsHome';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { PaginationBlock } from 'shared/ui/Pagination';

import { useActions } from 'store/hooks/useActions';
import { RootState } from 'store/rootReducer';
import { PreviewPosts } from 'widgets/PreviewPosts';
import { PostsState } from 'widgets/PreviewPosts/model/type/postsType';

// const currentPage = 2;
// const totalPages = 5;

export const Home: React.FC = () => {
  const { pagination } = useSelector<RootState, PostsState>(
    (state) => state.posts
  );
  console.log(pagination.currentPage, 'currentPage');
  const handleClickPage = (page: number) => {
    postsRequestAsync(page);
    window.scroll(0, 0);
  };

  const [searchParams] = useSearchParams();
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
        ? postsRequestAsync(pagination.currentPage)
        : postsByTagRequestAsync(tag);
    } else {
      postsRequestAsync(pagination.currentPage);
    }
  }, [tag, pagination.currentPage]);

  return (
    <>
      <TagsHome />
      <PreviewPosts />
      <PaginationBlock
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onClickPage={handleClickPage}
      />
    </>
  );
};
