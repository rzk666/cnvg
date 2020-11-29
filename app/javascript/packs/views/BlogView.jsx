import React from 'react';
// Components
import Articles from '../components/blog/Articles';
import AddNewArticle from '../components/blog/AddNewArticle';
// Styles
import styles from './Blog.module.scss';

const BlogView = () => (
  <div className={styles.container}>
    <h2>Simple Blog App</h2>
    <div className={styles.content_container}>
      <Articles data={[{ title: 'test', text: 'test text bla bla' }, { title: 'test2', text: 'test2blalba' }]} />
      <AddNewArticle onSubmit={() => {}} />
    </div>
  </div>
);

export default BlogView;
