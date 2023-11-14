import axios from 'axios';
import { TagsHome } from 'features/TagsHome';
import React, { useEffect } from 'react';
import { PaginationBlock } from 'shared/ui/Pagination';
import { Tags } from 'shared/ui/Tags';
import { PreviewPosts } from 'widgets/PreviewPosts';

const currentPage = 2;
const totalPages = 5;

export const Home: React.FC = () => {
  const handleClickPage = (page: number) => {
    console.log('page', page);
  };

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3000/blog/tags')
  //     .then((res) => {
  //       const arrTags = res.data.tags;
  //       return arrTags;
  //     })
  //     .then((arrTags) => {
  //       arrTags.map((tag: string) => {
  //         return arr.push(tag);
  //       });

  //       console.log(arr);
  //     });
  // }, []);

  // console.log(arr, 'arr');

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
