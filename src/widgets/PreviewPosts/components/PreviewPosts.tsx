import { PreviewPost } from 'entities/PreviewPost';
import { getTimePost } from 'entities/PreviewPost/lib/getTimePost';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from 'store/hooks/useActions';
import { RootState } from 'store/rootReducer';
import { PostsState } from '../model/type/postsType';

export const PreviewPosts = () => {
  const { postsRequestAsync } = useActions();
  useEffect(() => {
    postsRequestAsync();
  }, []);

  const { posts } = useSelector<RootState, PostsState>(
    (state) => state.posts
  );
  posts.map((post) => {
    console.log(post);
  });

  // const post = {
  //   id: '1',
  //   avatar:
  //     'https://img.freepik.com/free-photo/a-digital-painting-of-a-mountain-with-a-colorful-tree-in-the-foreground_1340-25699.jpg?w=1380&t=st=1699519724~exp=1699520324~hmac=df1c16b05156ce4fd402b7edb0ce94a7d37e2dcf659e670a7855a150e4f7fcc2',
  //   userName: 'Ririka',
  //   created: getTimePost(1699621795282),
  //   tags: ['html', 'js'],
  //   postImg:
  //     'https://img.freepik.com/free-photo/morskie-oko-in-tatry_1204-510.jpg?w=1380&t=st=1699521548~exp=1699522148~hmac=74f0b16d7eef31d02c6324e2790b949af8c144989e97939f496cdc6ef432b521',
  //   title: 'Природа',
  //   descr:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim placeat quas veniam dolorum commodi reiciendisnostrum eos saepe, aut vel. Quaerat illo sed aspernatur?Voluptates facilis dolorem architecto sint numquam?',
  //   comment: 5,
  // };

  return (
    <div>
      {posts.map((post) => {
        return (
          <PreviewPost
            post={post.post}
            user={post.user}
            key={post.post.id}
          />
        );
      })}
    </div>
  );
};
