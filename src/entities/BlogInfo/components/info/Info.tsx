import React from 'react';
import { Image } from 'react-bootstrap';
import styles from './info.module.scss';

export const Info = () => {
  return (
    <div className="text-center">
      <h1 className={styles.title}>React Blogs для твоих историй</h1>
      <p className={styles.descr + ' mt-3'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
        odio recusandae veritatis atque explicabo nostrum quaerat
        soluta quas aspernatur maxime! Molestiae eveniet perferendis
        officia sapiente earum sit vel aspernatur? Itaque.
      </p>
      <Image src="/blog.png" className={styles.img + ' mt-2'} />
    </div>
  );
};
