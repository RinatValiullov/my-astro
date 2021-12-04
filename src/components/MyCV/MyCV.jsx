import React from 'react';
import styles from './MyCV.module.css';

const MyCV = () => {
  return (
    <section className={styles.content}>
      <h1>Ринат Валиуллов</h1>
      <h2>HTML-верстальщик, Фронтенд разработчик</h2>
      <a href="/assets/cv.pdf" download="cv.pdf" className={styles.cv}>Скачать резюме</a>
    </section>
  );
};

export { MyCV };
