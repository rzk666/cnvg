import axios from 'axios';

const csrfToken = document.querySelector('[name=csrf-token]').content;
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

// ----- Consts & Dicts ----- //
const API_ROUTE = 'api/v1';

export const fetchArticles = () => axios.create()({
  method: 'get',
  url: `${API_ROUTE}/articles`,
});

export const addArticle = (data) => axios.create()({
  method: 'post',
  url: `${API_ROUTE}/articles`,
  data,
});
