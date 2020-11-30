import React from 'react';
// Utils
import page from '../hocs/page';
// Universal
import { BLOG } from '../universal/pages';
// Components
import BlogController from '../controllers/BlogController';
import BlogView from '../views/BlogView';

const Blog = (props) => <BlogController {...props} View={BlogView} />;

export default (page(Blog, BLOG));
