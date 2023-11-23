import { PreviewPost } from 'entities/PreviewPost';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from 'store/hooks/useActions';
import { RootState } from 'store/rootReducer';
import { PostsState } from '../model/type/postsType';
import styles from './previewPosts.module.scss';

export const PreviewPosts = () => {
  const { posts } = useSelector<RootState, PostsState>(
    (state) => state.posts
  );

  return (
    <div className={styles.content}>
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
