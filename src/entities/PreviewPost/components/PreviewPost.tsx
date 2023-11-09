import React from 'react';
import styles from './previewPost.module.scss';
import { BtnBase } from 'shared/ui/BtnBase';

export const PreviewPost = () => {
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <div className={styles.user}>
          <img
            src="https://img.freepik.com/free-photo/a-digital-painting-of-a-mountain-with-a-colorful-tree-in-the-foreground_1340-25699.jpg?w=1380&t=st=1699519724~exp=1699520324~hmac=df1c16b05156ce4fd402b7edb0ce94a7d37e2dcf659e670a7855a150e4f7fcc2"
            alt="avatar"
            className={styles.avatar}
          />
          <span className={styles.userName}>Ririka</span>
          <span className={styles.creation}>4 часа назад</span>
        </div>
        <div className={styles.tags}>
          <span className={styles.tag}>html</span>
          <span className={styles.tag}>js</span>
        </div>
      </div>
      <div className={styles.content}>
        <img
          src="https://img.freepik.com/free-photo/morskie-oko-in-tatry_1204-510.jpg?w=1380&t=st=1699521548~exp=1699522148~hmac=74f0b16d7eef31d02c6324e2790b949af8c144989e97939f496cdc6ef432b521"
          alt="imagePost"
          className={styles.img}
        />
        <div className={styles.contentInfo}>
          <h3 className={styles.title}>Ghbetn</h3>
          <p className={styles.descr}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Enim placeat quas veniam dolorum commodi reiciendis
            nostrum eos saepe, aut vel. Quaerat illo sed aspernatur?
            Voluptates facilis dolorem architecto sint numquam?
          </p>
        </div>
      </div>
      <div className={styles.footer}>
        <span className={styles.comment}>
          <svg
            version="1.0"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
          >
            <path
              fill="#231F20"
              d="M60,0H4C1.789,0,0,1.789,0,4v40c0,2.211,1.789,4,4,4h8v15c0,0.404,0.243,0.77,0.617,0.924
	C12.741,63.976,12.871,64,13,64c0.26,0,0.516-0.102,0.707-0.293L29.414,48H60c2.211,0,4-1.789,4-4V4C64,1.789,62.211,0,60,0z M15,14
	h16c0.553,0,1,0.447,1,1s-0.447,1-1,1H15c-0.553,0-1-0.447-1-1S14.447,14,15,14z M45,34H15c-0.553,0-1-0.447-1-1s0.447-1,1-1h30
	c0.553,0,1,0.447,1,1S45.553,34,45,34z M14,27c0-0.553,0.447-1,1-1h24c0.553,0,1,0.447,1,1s-0.447,1-1,1H15
	C14.447,28,14,27.553,14,27z M49,22H15c-0.553,0-1-0.447-1-1s0.447-1,1-1h34c0.553,0,1,0.447,1,1S49.553,22,49,22z"
            />
          </svg>
          5
        </span>
        <BtnBase
          title="Подробнее"
          variant="outline-dark"
          maxWidth="250px"
        />
      </div>
    </div>
  );
};
