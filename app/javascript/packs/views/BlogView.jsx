import React from 'react';
// Components
import Articles from '../components/blog/Articles';
import AddNewArticle from '../components/blog/AddNewArticle';
// Styles
import styles from './Blog.module.scss';

const BlogView = () => (
  <div className={styles.container}>
    <h1>Simple Blog App</h1>
    <div className={styles.content_container}>
      <Articles data={[{ title: 'test', text: 'test text bla bla' }, { title: 'test2', text: 'test2blalba' }]} />
      <AddNewArticle onSubmit={() => {}} />
    </div>
  </div>
);

export default BlogView;
