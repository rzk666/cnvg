import React from 'react';
// Components
import { CircularProgress } from '@material-ui/core';
// Styles
import styles from './Articles.module.scss';

// ----- Help Components ----- //
const Article = ({ title, text }) => (
  <div className={styles.article_container}>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
);

const Articles = ({ data, isLoading }) => (
  <div className={styles.container}>
    <h1>Articles List</h1>
    <div className={styles.articles_container}>
      { isLoading ? <CircularProgress color="#CC869D" />
        : (
          <div className={styles.articles}>
            {data.map((article) => {
              console.log(article);
              const { attributes } = article;
              const { title, text } = attributes;
              return <Article text={text} title={title} />;
            })}
          </div>
        )}
    </div>
  </div>
);

export default Articles;
