import React from 'react';
// Animations
import { motion } from 'framer-motion';
// Components
import Button from '@material-ui/core/Button';
// Utils
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';
// Universasl
import { BLOG, CARS } from '../universal/pages';
// Icons
import { Commute, Book } from '@material-ui/icons';
// Styles
import styles from './Home.module.scss';

// ----- Help Components ----- //
const RadialButton = ({ onClick, type }) => (
  <div className={classnames(styles.button_container, 'hover_clickable')}>
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
      <Button
        onClick={() => onClick()}
        className={styles.radial_button}
      >
        {type === 'Blog' ? <Book /> : <Commute />}
      </Button>
    </motion.div>
    {`${type} app`}
  </div>
);

const HomeView = () => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <RadialButton type="Blog" onClick={() => history.push({ pathname: `/${BLOG}` })} />
      <RadialButton type="Cars" onClick={() => history.push({ pathname: `/${CARS}` })} />
    </div>
  );
};

export default HomeView;
