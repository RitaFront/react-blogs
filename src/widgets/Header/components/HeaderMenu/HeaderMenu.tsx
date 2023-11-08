import styles from './headerMenu.module.scss';
import { AvatarUser } from 'features/AvatarUser';
import { useNavigate } from 'react-router-dom';
import { BtnBase } from 'shared/ui/BtnBase';
import { useActions } from 'store/hooks/useActions';

export const HeaderMenu = () => {
  const navigate = useNavigate();
  const { logoutRequest } = useActions();

  const handleClick = () => {
    localStorage.removeItem('token');
    logoutRequest();
    navigate('/auth');
  };

  return (
    <div className={styles.menu}>
      <BtnBase
        title="Добавить пост"
        variant="outline-dark"
        maxWidth="250px"
      />
      <div className={styles.user}>
        <AvatarUser />
        <BtnBase
          title="Выйти"
          variant="outline-dark"
          maxWidth="150px"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
