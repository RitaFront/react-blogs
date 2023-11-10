import { PreviewPost } from 'entities/PreviewPost';
import React from 'react';
import { PaginationBlock } from 'shared/ui/Pagination';
import { Tags } from 'shared/ui/Tags';

const arr = ['Все', 'html', 'css', 'js'];
const currentPage = 2;
const totalPages = 5;
const post = {
  id: '1',
  avatar:
    'https://img.freepik.com/free-photo/a-digital-painting-of-a-mountain-with-a-colorful-tree-in-the-foreground_1340-25699.jpg?w=1380&t=st=1699519724~exp=1699520324~hmac=df1c16b05156ce4fd402b7edb0ce94a7d37e2dcf659e670a7855a150e4f7fcc2',
  userName: 'Ririka',
  created: '5',
  tags: ['html', 'js'],
  postImg:
    'https://img.freepik.com/free-photo/morskie-oko-in-tatry_1204-510.jpg?w=1380&t=st=1699521548~exp=1699522148~hmac=74f0b16d7eef31d02c6324e2790b949af8c144989e97939f496cdc6ef432b521',
  title: 'Природа',
  descr:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim placeat quas veniam dolorum commodi reiciendisnostrum eos saepe, aut vel. Quaerat illo sed aspernatur?Voluptates facilis dolorem architecto sint numquam?',
  comment: 5,
};

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
      <PreviewPost post={post} />
    </>
  );
};
