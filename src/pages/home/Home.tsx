import { PreviewPost } from 'entities/PreviewPost';
import React from 'react';
import { PaginationBlock } from 'shared/ui/Pagination';
import { Tags } from 'shared/ui/Tags';

const arr = ['Все', 'html', 'css', 'js'];
const currentPage = 2;
const totalPages = 5;

export const Home: React.FC = () => {
  const handleClickTags = (index: number) => {
    console.log('tags', arr[index]);
  };
  const handleClickPage = (page: number) => {
    console.log('page', page);
  };

  return (
    <>
      <div>Home</div>
      <Tags arr={arr} onClickTags={handleClickTags} />
      <PaginationBlock
        currentPage={currentPage}
        totalPages={totalPages}
        onClickPage={handleClickPage}
      />
      <PreviewPost />
    </>
  );
};
