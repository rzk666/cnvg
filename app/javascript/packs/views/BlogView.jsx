import React from 'react';
// Components
import Articles from '../components/blog/Articles';
import AddNewArticle from '../components/blog/AddNewArticle';
// Styles
import styles from './Blog.module.scss';

const BlogView = ({ data, addArticle, isLoading }) => (
  <div className={styles.container}>
    <h1>Simple Blog App</h1>
    <div className={styles.content_container}>
      <Articles isLoading={isLoading} data={data} />
      <AddNewArticle onSubmit={addArticle} />
    </div>
  </div>
);

export default BlogView;
