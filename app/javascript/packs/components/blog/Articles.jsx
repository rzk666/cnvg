import React from 'react';
// Styles
import styles from './Articles.module.scss';

// ----- Help Components ----- //
const Article = ({ title, text }) => (
  <div className={styles.article_container}>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
);

const Articles = ({ data }) => (
  <div className={styles.container}>
    <h1>Articles List</h1>
    <div className={styles.articles}>
      {data.map((article) => {
        const { title, text } = article;
        return <Article text={text} title={title} />;
      })}
    </div>
  </div>
);

export default Articles;
