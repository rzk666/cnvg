import React, { useState, useEffect, useCallback } from 'react';
// Misc
import { sleep } from '../utils/libs';
// Api Requests
import { fetchArticles, addArticle } from '../api/apicalls';

const BlogController = (props) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const addNewArticle = useCallback(async (newArticle) => {
    setLoading(true);
    const { data } = await addArticle(newArticle);
    // Fake loading
    await sleep(1000);
    setArticles(data.data);
    setLoading(false);
  }, []);
  useEffect(() => {
    if (!articles.length) {
      const getArticles = async () => {
        setLoading(true);
        const { data } = await fetchArticles();
        // Fake loading
        await sleep(1000);
        setLoading(false);
        setArticles(data.data);
      };
      getArticles();
    }
  },
  [articles]);
  const { View } = props;
  return (
    <View
      {...props}
      data={articles}
      isLoading={isLoading}
      addArticle={addNewArticle}
    />
  );
};

export default BlogController;
