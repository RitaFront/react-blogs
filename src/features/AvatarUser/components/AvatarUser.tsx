import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import styles from './avatarUser.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import { LoginState } from 'widgets/Login/model/type/loginType';

export const AvatarUser = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { data } = useSelector<RootState, LoginState>(
    (state) => state.user
  );

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Link
      to={`/profile/${data.login}`}
      className={styles.avatarBlock}
    >
      <span className={styles.userName}>{data.login}</span>
      <Image
        src="/avatar.png"
        alt="Avatar"
        className={styles.avatar}
        onClick={handleClick}
      />
    </Link>
  );
};
