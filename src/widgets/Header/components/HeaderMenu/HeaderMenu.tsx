import styles from './headerMenu.module.scss';
import { AvatarUser } from 'features/AvatarUser';
import { useNavigate } from 'react-router-dom';
import { BtnBase } from 'shared/ui/BtnBase';

export const HeaderMenu = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem('token');
    navigate('/auth');
  };

  return (
    <div className={styles.menu}>
      <BtnBase title="Добавить пост" variant="outline-dark" />
      <AvatarUser />
      <BtnBase
        title="Выйти"
        variant="outline-dark"
        maxWidth="150px"
        onClick={handleClick}
      />
    </div>
  );
};
