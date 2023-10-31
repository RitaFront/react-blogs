import React from 'react';
import { Image } from 'react-bootstrap';
import styles from './avatarUser.module.scss';
import { Link } from 'react-router-dom';

export const AvatarUser = () => {
  return (
    <Link to="/profile/123">
      <Image
        src="/avatar.png"
        alt="Avatar"
        className={styles.avatar}
      />
    </Link>
  );
};
