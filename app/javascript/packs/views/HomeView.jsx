import React from 'react';
// Components
import Button from '@material-ui/core/Button';
// Utils
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';
// Universasl
import { BLOG, MAINAPP } from '../universal/pages';
// Icons
import { Commute, Book } from '@material-ui/icons';
// Styles
import styles from './Home.module.scss';

// ----- Help Components ----- //
const RadialButton = ({ onClick, type }) => (
  <div className={classnames(styles.button_container, 'hover_clickable')}>
    <Button
      onClick={() => onClick()}
      className={styles.radial_button}
    >
      {type === 'Blog' ? <Book /> : <Commute />}
    </Button>
    {`${type} app`}
  </div>
);

const HomeView = () => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <RadialButton type="Blog" onClick={() => history.push({ pathname: `/${BLOG}` })} />
      <RadialButton type="Cars" onClick={() => history.push({ pathname: `/${MAINAPP}` })} />
    </div>
  );
};

export default HomeView;
