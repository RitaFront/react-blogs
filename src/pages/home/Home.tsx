import React from 'react';
import { Tags } from 'shared/ui/Tags';

const arr = ['Все', 'html', 'css', 'js'];

export const Home: React.FC = () => {
  const handleClickTags = (index: number) => {
    console.log(arr[index]);
  };

  return (
    <>
      <div>Home</div>
      <Tags arr={arr} onClickTags={handleClickTags} />
    </>
  );
};
